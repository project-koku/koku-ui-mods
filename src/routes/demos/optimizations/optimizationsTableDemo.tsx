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

interface OptimizationsDetailsDemoOwnProps {
  // TBD...
}

type OptimizationsDetailsDemoProps = OptimizationsDetailsDemoOwnProps;

const useQueryFromRoute = () => {
  const location = useLocation();
  return parseQuery<Query>(location.search);
};

const OptimizationsDetailsDemo: React.FC<OptimizationsDetailsDemoProps> = () => {
  const intl = useIntl();
  const queryFromRoute = useQueryFromRoute();

  const groupBy = queryFromRoute?.group_by ? getGroupById(queryFromRoute) : 'project';
  const groupByValue = queryFromRoute?.group_by ? getGroupByValue(queryFromRoute) : 'openshift';

  return (
    <PageSection isFilled>
      <OptimizationsTable
        breadcrumbLabel={intl.formatMessage(messages.breakdownBackToOptimizationsProject, { value: groupByValue })}
        breadcrumbPath={formatPath(`${routes.optimizationsTable.path}${location.search}`)}
        groupBy={groupBy}
        groupByValue={groupByValue}
        linkPath={formatPath(routes.optimizationsBreakdown.path)}
      />
    </PageSection>
  );
};

export default OptimizationsDetailsDemo;
