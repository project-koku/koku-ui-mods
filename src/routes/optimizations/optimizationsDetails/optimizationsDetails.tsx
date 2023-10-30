import { PageSection } from '@patternfly/react-core';
import React from 'react';
import { OptimizationsTable } from 'routes/optimizations/optimizationsTable';

import { styles } from './optimizationsDetails.styles';
import { OptimizationsDetailsHeader } from './optimizationsDetailsHeader';

interface OptimizationsDetailsOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  linkPath?: string;
  linkState?: any;
}

type OptimizationsDetailsProps = OptimizationsDetailsOwnProps;

const OptimizationsDetails: React.FC<OptimizationsDetailsProps> = ({
  breadcrumbLabel,
  breadcrumbPath,
  linkPath,
  linkState,
}) => {
  return (
    <div style={styles.container}>
      <OptimizationsDetailsHeader />
      <PageSection isFilled>
        <OptimizationsTable
          breadcrumbLabel={breadcrumbLabel}
          breadcrumbPath={breadcrumbPath}
          linkPath={linkPath}
          linkState={linkState}
        />
      </PageSection>
    </div>
  );
};

export default OptimizationsDetails;
