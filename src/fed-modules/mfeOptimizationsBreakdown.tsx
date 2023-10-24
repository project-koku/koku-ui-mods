/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { OptimizationsBreakdown } from 'routes/optimizations/optimizationsBreakdown';
import { mfeStore } from 'store';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsBreakdownOwnProps {
  // TBD...
}

type OptimizationsBreakdownProps = OptimizationsBreakdownOwnProps;

const MfeOptimizationsBreakdown: React.FC<OptimizationsBreakdownProps> = () => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <Provider store={mfeStore as any}>
        <OptimizationsBreakdown />
      </Provider>
    </IntlProvider>
  );
};

export default MfeOptimizationsBreakdown;
