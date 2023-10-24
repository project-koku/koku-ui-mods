/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { OptimizationsDetails } from 'routes/optimizations/optimizationsDetails';
import { mfeStore } from 'store';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsDetailsOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  toPath?: string;
}

type OptimizationsDetailsProps = OptimizationsDetailsOwnProps;

const MfeOptimizationsDetails: React.FC<OptimizationsDetailsProps> = ({
  breadcrumbLabel,
  breadcrumbPath,
  toPath,
}: OptimizationsDetailsOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <Provider store={mfeStore as any}>
        <OptimizationsDetails breadcrumbLabel={breadcrumbLabel} breadcrumbPath={breadcrumbPath} toPath={toPath} />
      </Provider>
    </IntlProvider>
  );
};

export default MfeOptimizationsDetails;
