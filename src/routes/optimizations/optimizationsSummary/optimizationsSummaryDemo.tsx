import { Card, CardBody, CardTitle, Grid, GridItem, PageSection, Title, TitleSizes } from '@patternfly/react-core';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { routes } from 'routes';
import { formatPath } from 'utils/paths';

import { OptimizationsSummary } from './optimizationsSummary';

interface OptimizationsSummaryOwnProps {
  // TBD...
}

type OptimizationsSummaryProps = OptimizationsSummaryOwnProps;

const OptimizationsSummaryDemo: React.FC<OptimizationsSummaryProps> = () => {
  const intl = useIntl();

  return (
    <>
      <PageHeader>
        <PageHeaderTitle title={intl.formatMessage(messages.optimizationsSummaryDemo)} />
      </PageHeader>
      <PageSection isFilled>
        <Grid hasGutter>
          <GridItem>
            <Card>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes.lg}>
                  {intl.formatMessage(messages.optimizationsBadgeDemoGroupBy, {
                    groupBy: 'project',
                    groupByValue: 'openshift',
                  })}
                </Title>
              </CardTitle>
              <CardBody>
                <OptimizationsSummary toPath={formatPath(routes.optimizationsSummary.path)} />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </>
  );
};

export default OptimizationsSummaryDemo;
