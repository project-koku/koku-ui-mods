import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { routes } from 'routes';
import { OptimizationsDetails } from 'routes/optimizations/optimizationsDetails';
import { formatPath } from 'utils/paths';

interface OptimizationsDetailsDemoOwnProps {
  // TBD...
}

type OptimizationsDetailsDemoProps = OptimizationsDetailsDemoOwnProps;

const OptimizationsDetailsDemo: React.FC<OptimizationsDetailsDemoProps> = () => {
  const intl = useIntl();

  return (
    <OptimizationsDetails
      breadcrumbLabel={intl.formatMessage(messages.breakdownBackToOptimizations)}
      breadcrumbPath={formatPath(`${routes.optimizationsDetails.path}${location.search}`)}
      linkPath={formatPath(routes.optimizationsBreakdown.path)}
    />
  );
};

export default OptimizationsDetailsDemo;
