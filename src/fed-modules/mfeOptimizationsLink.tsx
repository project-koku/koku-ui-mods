import React from 'react';
import { OptimizationsLink } from 'routes/optimizations/optimizationsLink';

import { MfeOptimizationsWrapper } from './mfeOptimizationsWrapper';

export interface OptimizationsBadgeOwnProps {
  groupBy?: string;
  groupByValue?: string;
  linkPath?: string;
  linkState?: any;
}

type OptimizationsBadgeProps = OptimizationsBadgeOwnProps;

const MfeOptimizationsBadge: React.FC<OptimizationsBadgeProps> = ({
  groupBy,
  groupByValue,
  linkPath,
  linkState,
}: OptimizationsBadgeOwnProps) => {
  return (
    <MfeOptimizationsWrapper>
      <OptimizationsLink groupBy={groupBy} groupByValue={groupByValue} linkState={linkState} linkPath={linkPath} />
    </MfeOptimizationsWrapper>
  );
};

export default MfeOptimizationsBadge;
