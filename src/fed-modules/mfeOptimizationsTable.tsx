/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { OptimizationsTable } from 'routes/optimizations/optimizationsTable';
import { mfeStore } from 'store';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsDetailsOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  groupBy?: string;
  groupByValue?: string;
  linkPath?: string;
  linkState?: any;
}

type OptimizationsDetailsProps = OptimizationsDetailsOwnProps;

const MfeOptimizationsDetails: React.FC<OptimizationsDetailsProps> = ({
  breadcrumbLabel,
  breadcrumbPath,
  groupBy,
  groupByValue,
  linkPath,
  linkState,
}: OptimizationsDetailsOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <Provider store={mfeStore as any}>
        <OptimizationsTable
          breadcrumbLabel={breadcrumbLabel}
          breadcrumbPath={breadcrumbPath}
          groupBy={groupBy}
          groupByValue={groupByValue}
          linkPath={linkPath}
          linkState={linkState}
        />
      </Provider>
    </IntlProvider>
  );
};

export default MfeOptimizationsDetails;
