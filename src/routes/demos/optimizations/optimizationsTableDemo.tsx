import { PageSection } from '@patternfly/react-core';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { routes } from 'routes';
import { OptimizationsTable } from 'routes/optimizations/optimizationsTable';
import { formatPath } from 'utils/paths';

interface OptimizationsDetailsDemoOwnProps {
  // TBD...
}

type OptimizationsDetailsDemoProps = OptimizationsDetailsDemoOwnProps;

const OptimizationsDetailsDemo: React.FC<OptimizationsDetailsDemoProps> = () => {
  const intl = useIntl();
  const groupBy = 'project';
  const groupByValue = 'openshift';

  return (
    <>
      <PageHeader>
        <PageHeaderTitle title={intl.formatMessage(messages.optimizationsTableDemo)} />
      </PageHeader>
      <PageSection isFilled>
        <OptimizationsTable
          breadcrumbLabel={intl.formatMessage(messages.breakdownBackToOptimizationsProject, { value: groupByValue })}
          breadcrumbPath={formatPath(`${routes.optimizationsTable.path}${location.search}`)}
          groupBy={groupBy}
          groupByValue={groupByValue}
          toPath={formatPath(routes.optimizationsBreakdown.path)}
        />
      </PageSection>
    </>
  );
};

export default OptimizationsDetailsDemo;
