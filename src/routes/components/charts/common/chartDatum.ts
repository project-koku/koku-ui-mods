import { intl } from 'components/i18n';
import messages from 'locales/messages';
import type { FormatOptions } from 'utils/format';
import { formatCurrency, unitsLookupKey } from 'utils/format';

export interface ChartDatum {
  childName?: string;
  date?: string;
  key: string | number;
  name?: string | number;
  show?: boolean;
  tooltip?: string;
  units: string;
  x: string | number;
  y: number;
  y0?: number;
}

export function getMaxMinValues(datums: ChartDatum[]) {
  let max = -1;
  let min = -1;
  if (datums && datums.length) {
    datums.forEach(datum => {
      const maxY =
        datum.y0 !== undefined
          ? Math.max(datum.y, datum.y0)
          : Array.isArray(datum.y)
            ? datum.y[0] !== null
              ? Math.max(...datum.y)
              : (datum as any).yVal // For boxplot, which is hidden via `datum.y[0] = null` when all values are equal
                ? (datum as any).yVal
                : 0
            : datum.y;
      const minY =
        datum.y0 !== undefined
          ? Math.min(datum.y, datum.y0)
          : Array.isArray(datum.y)
            ? datum.y[0] !== null
              ? Math.min(...datum.y)
              : (datum as any).yVal // For boxplot, which is hidden via `datum.y[0] = null` when all values are equal
                ? (datum as any).yVal
                : 0
            : datum.y;
      if (maxY > max) {
        max = maxY;
      }
      if ((min === -1 || minY < min) && minY !== null) {
        min = minY;
      }
    });
  }
  return { max, min };
}

export function getTooltipContent(formatter) {
  return function labelFormatter(value: number, unit: string = null, options: FormatOptions = {}) {
    const lookup = unitsLookupKey(unit);
    if (lookup) {
      return intl.formatMessage(messages.unitTooltips, {
        units: lookup,
        value: formatter(value, unit, options),
      });
    }
    return formatCurrency(value, unit, options);
  };
}

// Returns true if non negative integer
export function isInt(n) {
  const result = Number(n) === n && n % 1 === 0;
  return result && n >= 0;
}

// Returns true if non negative float
export function isFloat(n) {
  const result = Number(n) === n && n % 1 !== 0;
  return result && n >= 0;
}
