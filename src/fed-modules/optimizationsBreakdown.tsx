/* eslint-disable no-console */
import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
import { getLocale } from 'components/i18n';
import React from 'react';
import { OptimizationsBreakdown } from 'routes/optimizations/optimizationsBreakdown';

// eslint-disable-next-line no-restricted-imports
import messages from '../../locales/data.json';

export interface OptimizationsBreakdownOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  id?: string;
}

type OptimizationsBreakdownProps = OptimizationsBreakdownOwnProps;

const MfeOptimizationsBreakdown: React.FC<OptimizationsBreakdownProps> = ({
  breadcrumbLabel,
  breadcrumbPath,
  id,
}: OptimizationsBreakdownOwnProps) => {
  const locale = getLocale();

  return (
    <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={console.log}>
      <OptimizationsBreakdown breadcrumbLabel={breadcrumbLabel} breadcrumbPath={breadcrumbPath} id={id} />
    </IntlProvider>
  );
};

export default MfeOptimizationsBreakdown;
