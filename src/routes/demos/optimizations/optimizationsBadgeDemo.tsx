import { PageSection } from '@patternfly/react-core';
import React from 'react';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';

interface OptimizationsBadgeDemoOwnProps {
  // TBD...
}

type OptimizationsBadgeDemoProps = OptimizationsBadgeDemoOwnProps;

const OptimizationsBadgeDemo: React.FC<OptimizationsBadgeDemoProps> = () => {
  return (
    <PageSection isFilled>
      <OptimizationsBadge groupBy="project" groupByValue="openshift" />
    </PageSection>
  );
};

export default OptimizationsBadgeDemo;
