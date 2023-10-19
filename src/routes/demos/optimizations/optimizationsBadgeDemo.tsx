import { Card, CardBody, CardTitle, Grid, GridItem, PageSection, Title, TitleSizes } from '@patternfly/react-core';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { OptimizationsBadge } from 'routes/optimizations/optimizationsBadge';

interface OptimizationsBadgeDemoOwnProps {
  // TBD...
}

type OptimizationsBadgeDemoProps = OptimizationsBadgeDemoOwnProps;

const OptimizationsBadgeDemo: React.FC<OptimizationsBadgeDemoProps> = () => {
  const intl = useIntl();

  return (
    <>
      <PageHeader>
        <PageHeaderTitle title={intl.formatMessage(messages.optimizationsBadgeDemo)} />
      </PageHeader>
      <PageSection isFilled>
        <Grid hasGutter md={6}>
          <GridItem span={6}>
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
                <OptimizationsBadge groupBy="project" groupByValue="openshift" />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={6}>
            <Card>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes.lg}>
                  {intl.formatMessage(messages.optimizationsBadgeDemoDefault)}
                </Title>
              </CardTitle>
              <CardBody>
                <OptimizationsBadge />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </>
  );
};

export default OptimizationsBadgeDemo;
