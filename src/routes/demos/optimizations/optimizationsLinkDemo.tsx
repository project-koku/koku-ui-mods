import { Card, CardBody, PageSection } from '@patternfly/react-core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { OptimizationsLink } from 'routes/optimizations/optimizationsLink';
import { getBreakdownPath } from 'routes/utils/paths';
import { formatPath } from 'utils/paths';

interface OptimizationsLinkDemoOwnProps {
  // TBD...
}

type OptimizationsLinkDemoProps = OptimizationsLinkDemoOwnProps;

const OptimizationsLinkDemo: React.FC<OptimizationsLinkDemoProps> = () => {
  const location = useLocation();

  const groupBy = 'project';
  const groupByValue = 'cost-management';

  const state = {
    ...(location.state && location.state),
    details: {
      breadcrumbPath: formatPath(routes.optimizationsLink.path),
    },
  };

  const toPath = getBreakdownPath({
    basePath: formatPath(routes.optimizationsTable.path),
    groupBy,
    id: groupByValue,
  });

  return (
    <PageSection isFilled>
      <Card>
        <CardBody>
          <OptimizationsLink groupBy={groupBy} groupByValue={groupByValue} state={state} toPath={toPath} />
        </CardBody>
      </Card>
    </PageSection>
  );
};

export default OptimizationsLinkDemo;
