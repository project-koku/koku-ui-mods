import { PageSection } from '@patternfly/react-core';
import type { Query } from 'api/queries/query';
import { parseQuery } from 'api/queries/query';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { OptimizationsTable } from 'routes/optimizations/optimizationsTable';
import { getGroupById, getGroupByValue } from 'routes/utils/groupBy';
import { formatPath } from 'utils/paths';

interface OptimizationsDetailsStagingOwnProps {
  // TBD...
}

type OptimizationsDetailsStagingProps = OptimizationsDetailsStagingOwnProps;

const useQueryFromRoute = () => {
  const location = useLocation();
  return parseQuery<Query>(location.search);
};

const OptimizationsDetailsStaging: React.FC<OptimizationsDetailsStagingProps> = () => {
  const intl = useIntl();
  const queryFromRoute = useQueryFromRoute();

  // The groupBy and groupByValue is the project, cluster, node, or tag name shown in the OCP Details breakdown page
  const groupBy = queryFromRoute?.group_by ? getGroupById(queryFromRoute) : undefined;
  const groupByValue = queryFromRoute?.group_by ? getGroupByValue(queryFromRoute) : 'openshift-kube-apiserver';

  // Test filters
  const clusterFilter = 'test';
  const projectFilter = 'Yuptoo';

  return (
    <PageSection isFilled>
      <OptimizationsTable
        breadcrumbLabel={intl.formatMessage(messages.breakdownBackToOptimizationsProject, { value: groupByValue })}
        breadcrumbPath={formatPath(`${routes.optimizationsTable.path}${location.search}`)}
        cluster={clusterFilter}
        hideCluster={groupBy === 'cluster'}
        hideProject={groupBy === 'project'}
        project={projectFilter}
        linkPath={formatPath(routes.optimizationsBreakdown.path)}
      />
    </PageSection>
  );
};

export default OptimizationsDetailsStaging;
