import { PageSection } from '@patternfly/react-core';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { routes } from 'routes';
import { OptimizationsSummary } from 'routes/optimizations/optimizationsSummary';
import { formatPath } from 'utils/paths';

interface OptimizationsSummaryDemoOwnProps {
  // TBD...
}

type OptimizationsSummaryDemoProps = OptimizationsSummaryDemoOwnProps;

const OptimizationsSummaryDemo: React.FC<OptimizationsSummaryDemoProps> = () => {
  const intl = useIntl();

  return (
    <>
      <PageHeader>
        <PageHeaderTitle title={intl.formatMessage(messages.optimizationsSummaryDemo)} />
      </PageHeader>
      <PageSection isFilled>
        <OptimizationsSummary toPath={formatPath(routes.optimizationsDetails.path)} />
      </PageSection>
    </>
  );
};

export default OptimizationsSummaryDemo;
