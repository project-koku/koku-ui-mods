/* eslint-disable no-console */
import React from 'react';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';

import { MfeOptimizationsWrapper } from './mfeOptimizationsWrapper';

export interface OptimizationsBadgeOwnProps {
  groupBy?: string;
  groupByValue?: string;
}

type OptimizationsBadgeProps = OptimizationsBadgeOwnProps;

const MfeOptimizationsBadge: React.FC<OptimizationsBadgeProps> = ({
  groupBy,
  groupByValue,
}: OptimizationsBadgeOwnProps) => {
  return (
    <MfeOptimizationsWrapper>
      <OptimizationsBadge groupBy={groupBy} groupByValue={groupByValue} />
    </MfeOptimizationsWrapper>
  );
};

export default MfeOptimizationsBadge;
