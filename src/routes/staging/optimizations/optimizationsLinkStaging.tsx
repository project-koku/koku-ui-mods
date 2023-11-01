import { PageSection } from '@patternfly/react-core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { OptimizationsLink } from 'routes/optimizations/optimizationsLink';
import { getBreakdownPath } from 'routes/utils/paths';
import { formatPath } from 'utils/paths';

interface OptimizationsLinkStagingOwnProps {
  // TBD...
}

type OptimizationsLinkStagingProps = OptimizationsLinkStagingOwnProps;

const OptimizationsLinkStaging: React.FC<OptimizationsLinkStagingProps> = () => {
  const location = useLocation();

  const groupBy = 'project';
  const groupByValue = 'kube-system';

  const state = {
    ...(location.state && location.state),
    details: {
      breadcrumbPath: formatPath(routes.optimizationsLink.path),
    },
  };

  const linkPath = getBreakdownPath({
    basePath: formatPath(routes.optimizationsTable.path),
    groupBy,
    id: groupByValue,
  });

  return (
    <PageSection isFilled>
      <OptimizationsLink groupBy={groupBy} groupByValue={groupByValue} linkPath={linkPath} linkState={state} />
    </PageSection>
  );
};

export default OptimizationsLinkStaging;
