import { PageSection } from '@patternfly/react-core';
import React from 'react';
import { routes } from 'routes';
import { OptimizationsSummary } from 'routes/optimizations/optimizationsSummary';
import { formatPath } from 'utils/paths';

interface OptimizationsSummaryDemoOwnProps {
  // TBD...
}

type OptimizationsSummaryDemoProps = OptimizationsSummaryDemoOwnProps;

const OptimizationsSummaryDemo: React.FC<OptimizationsSummaryDemoProps> = () => {
  return (
    <PageSection isFilled>
      <OptimizationsSummary linkPath={formatPath(routes.optimizationsDetails.path)} />
    </PageSection>
  );
};

export default OptimizationsSummaryDemo;
