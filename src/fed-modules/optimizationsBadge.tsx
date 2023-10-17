/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsBadgeOwnProps {
  filter?: string;
  filterValue?: string;
}

type OptimizationsBadgeProps = OptimizationsBadgeOwnProps;

const MfeOptimizationsBadge: React.FC<OptimizationsBadgeProps> = ({
  filter,
  filterValue,
}: OptimizationsBadgeOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <OptimizationsBadge filter={filter} filterValue={filterValue} />
    </IntlProvider>
  );
};

export default MfeOptimizationsBadge;
