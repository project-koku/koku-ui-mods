import React from 'react';
import { OptimizationsDetails } from 'routes/optimizations/optimizationsDetails';

import { MfeOptimizationsWrapper } from './mfeOptimizationsWrapper';

export interface OptimizationsDetailsOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  linkPath?: string;
  linkState?: any;
}

type OptimizationsDetailsProps = OptimizationsDetailsOwnProps;

const MfeOptimizationsDetails: React.FC<OptimizationsDetailsProps> = ({
  breadcrumbLabel,
  breadcrumbPath,
  linkPath,
  linkState,
}: OptimizationsDetailsOwnProps) => {
  return (
    <MfeOptimizationsWrapper>
      <OptimizationsDetails
        breadcrumbLabel={breadcrumbLabel}
        breadcrumbPath={breadcrumbPath}
        linkPath={linkPath}
        linkState={linkState}
      />
    </MfeOptimizationsWrapper>
  );
};

export default MfeOptimizationsDetails;
