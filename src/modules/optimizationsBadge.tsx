/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { OptimizationsBadge } from 'routes/components/optimizations';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsBadgeOwnProps {
  // TBD...
}

type OptimizationsBadgeProps = OptimizationsBadgeOwnProps;

const FMOptimizationsBadge: React.FC<OptimizationsBadgeProps> = () => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <OptimizationsBadge />
    </IntlProvider>
  );
};

export default FMOptimizationsBadge;
