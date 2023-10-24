/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { OptimizationsSummary } from 'routes/optimizations/optimizationsSummary';
import { mfeStore } from 'store';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';
export interface OptimizationsSummaryOwnProps {
  toPath?: string;
}

type OptimizationsSummaryProps = OptimizationsSummaryOwnProps;

const MfeOptimizationsSummary: React.FC<OptimizationsSummaryProps> = ({ toPath }: OptimizationsSummaryOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <Provider store={mfeStore as any}>
        <OptimizationsSummary toPath={toPath} />
      </Provider>
    </IntlProvider>
  );
};

export default MfeOptimizationsSummary;
