/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';
import { mfeStore } from 'store';

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
      <Provider store={mfeStore as any}>
        <OptimizationsBadge groupBy={groupBy} groupByValue={groupByValue} />
      </Provider>
    </IntlProvider>
  );
};

export default MfeOptimizationsBadge;
