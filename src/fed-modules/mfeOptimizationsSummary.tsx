/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { OptimizationsSummary } from 'routes/optimizations/optimizationsSummary';

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
      <OptimizationsSummary toPath={toPath} />
    </IntlProvider>
  );
};

export default MfeOptimizationsSummary;
