/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsBadgeOwnProps {
  groupBy?: string;
  groupByValue?: string;
}

type OptimizationsBadgeProps = OptimizationsBadgeOwnProps;

const MfeOptimizationsBadge: React.FC<OptimizationsBadgeProps> = ({
  groupBy,
  groupByValue,
}: OptimizationsBadgeOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <OptimizationsBadge groupBy={groupBy} groupByValue={groupByValue} />
    </IntlProvider>
  );
};

export default MfeOptimizationsBadge;
