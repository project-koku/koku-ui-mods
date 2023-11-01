import { PageSection } from '@patternfly/react-core';
import React from 'react';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';

interface OptimizationsBadgeStagingOwnProps {
  // TBD...
}

type OptimizationsBadgeStagingProps = OptimizationsBadgeStagingOwnProps;

const OptimizationsBadgeStaging: React.FC<OptimizationsBadgeStagingProps> = () => {
  return (
    <PageSection isFilled>
      <OptimizationsBadge groupBy="project" groupByValue="openshift" />
    </PageSection>
  );
};

export default OptimizationsBadgeStaging;
