import { intl } from 'components/i18n';
import messages from 'locales/messages';

import { getTooltipContent } from './chartDatum';

jest.spyOn(intl, 'formatMessage');

const labelFormatFunc = getTooltipContent(jest.fn(v => v));

describe('getTooltipContent', () => {
  test('format hrs and gb', () => {
    [
      { unit: 'hrs', withTranslation: messages.unitTooltips },
      { unit: 'gb', withTranslation: messages.unitTooltips },
      { unit: 'gb-mo', withTranslation: messages.unitTooltips },
    ].forEach(tc => {
      labelFormatFunc(10, tc.unit);
      expect(intl.formatMessage).toBeCalledWith(tc.withTranslation, { units: 'hrs', value: 10 });
    });
  });
  test('format unknown units', () => {
    expect(intl.formatMessage).not.toBeCalled();
    expect(labelFormatFunc(10)).toBe(10);
  });
});
