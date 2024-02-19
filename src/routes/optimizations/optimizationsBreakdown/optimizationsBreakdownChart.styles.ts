import { chart_color_blue_100 } from '@patternfly/react-tokens/dist/js/chart_color_blue_100';
import { chart_color_blue_200 } from '@patternfly/react-tokens/dist/js/chart_color_blue_200';
import { chart_color_blue_400 } from '@patternfly/react-tokens/dist/js/chart_color_blue_400';
import { chart_color_red_200 } from '@patternfly/react-tokens/dist/js/chart_color_red_200';
import { chart_global_FontFamily } from '@patternfly/react-tokens/dist/js/chart_global_FontFamily';
import { chart_global_FontSize_sm } from '@patternfly/react-tokens/dist/js/chart_global_FontSize_sm';
import { chart_tooltip_Fill } from '@patternfly/react-tokens/dist/js/chart_tooltip_Fill';
import type React from 'react';

export const chartStyles = {
  limit: {
    fill: 'none',
  },
  limitColorScale: [chart_color_red_200.value],
  request: {
    fill: 'none',
  },
  requestColorScale: [chart_color_blue_400.value],
  usageColorScale: [chart_color_blue_100.value, chart_color_blue_200.value],
};

export const styles = {
  base: {
    color: chart_tooltip_Fill.value,
    fontFamily: chart_global_FontFamily.value.replace(/ /g, ''),
    fontSize: chart_global_FontSize_sm.value,
  },
  nameColumn: {
    verticalAlign: 'top',
    width: '150px',
  },
  symbolColumn: {
    verticalAlign: 'top',
    width: '20px',
  },
  valueColumn: {
    textAlign: 'right',
    textWrap: 'wrap',
    verticalAlign: 'top',
  },
  values: {
    align: 'right',
  },
} as { [className: string]: React.CSSProperties };
