/* eslint-disable no-console */
import React from 'react';
import { OptimizationsTable } from 'routes/optimizations/optimizationsTable';

import { MfeOptimizationsWrapper } from './mfeOptimizationsWrapper';

export interface OptimizationsDetailsOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  groupBy?: string;
  groupByValue?: string;
  isProject?: boolean;
  linkPath?: string;
  linkState?: any;
}

type OptimizationsDetailsProps = OptimizationsDetailsOwnProps;

const MfeOptimizationsDetails: React.FC<OptimizationsDetailsProps> = ({
  breadcrumbLabel,
  breadcrumbPath,
  groupBy,
  groupByValue,
  isProject,
  linkPath,
  linkState,
}: OptimizationsDetailsOwnProps) => {
  return (
    <MfeOptimizationsWrapper>
      <OptimizationsTable
        breadcrumbLabel={breadcrumbLabel}
        breadcrumbPath={breadcrumbPath}
        groupBy={groupBy}
        groupByValue={groupByValue}
        isProject={isProject}
        linkPath={linkPath}
        linkState={linkState}
      />
    </MfeOptimizationsWrapper>
  );
};

export default MfeOptimizationsDetails;
