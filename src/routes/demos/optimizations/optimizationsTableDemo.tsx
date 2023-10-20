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
import { breakdownTitleKey } from 'utils/props';

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
  const groupBy = getGroupById(queryFromRoute);
  const groupByValue = getGroupByValue(queryFromRoute);

  const project = queryFromRoute[breakdownTitleKey];

  return (
    <OptimizationsTable
      breadcrumbLabel={intl.formatMessage(messages.breakdownBackToOptimizationsProject, { value: project })}
      breadcrumbPath={formatPath(`${routes.ocpBreakdown.path}${location.search}`)}
      groupBy={groupBy}
      groupByValue={groupByValue}
      toPath={formatPath(routes.optimizationsDetails.path)}
    />
  );
};

export default OptimizationsDetailsDemo;
