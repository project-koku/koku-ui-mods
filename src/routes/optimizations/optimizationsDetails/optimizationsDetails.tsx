import { PageSection } from '@patternfly/react-core';
import React from 'react';
import { OptimizationsTable } from 'routes/optimizations/optimizationsTable';

import { styles } from './optimizationsDetails.styles';
import { OptimizationsDetailsHeader } from './optimizationsDetailsHeader';

interface OptimizationsDetailsOwnProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  toPath?: string;
}

type OptimizationsDetailsProps = OptimizationsDetailsOwnProps;

const OptimizationsDetails: React.FC<OptimizationsDetailsProps> = ({ breadcrumbLabel, breadcrumbPath, toPath }) => {
  return (
    <div style={styles.container}>
      <OptimizationsDetailsHeader />
      <PageSection isFilled>
        <OptimizationsTable breadcrumbLabel={breadcrumbLabel} breadcrumbPath={breadcrumbPath} toPath={toPath} />
      </PageSection>
    </div>
  );
};

export default OptimizationsDetails;
