import './optimizationsBreakdown.scss';

import { Card, CardBody, CardTitle, Divider, Grid, GridItem, Title, TitleSizes } from '@patternfly/react-core';
import type { RecommendationItems, RecommendationTerm } from 'api/ros/recommendations';
import { format } from 'date-fns';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import type { OptimizationType } from 'utils/recomendations';
import { Interval, RecommendationType, ResourceType, UsageType } from 'utils/recomendations';

import { chartStyles, styles } from './optimizationsBreakdownUtilization.styles';
import { OptimizationsBreakdownChart } from './optimizationsBreakdownChart';

interface OptimizationsBreakdownUtilizationOwnProps {
  currentInterval?: Interval.short_term | Interval.medium_term | Interval.long_term;
  optimizationType?: OptimizationType;
  recommendations?: RecommendationItems;
}

type OptimizationsBreakdownUtilizationProps = OptimizationsBreakdownUtilizationOwnProps;

const OptimizationsBreakdownUtilization: React.FC<OptimizationsBreakdownUtilizationProps> = ({
  currentInterval,
  optimizationType,
  recommendations,
}) => {
  const intl = useIntl();

  const createRecommendationDatum = (
    recommendationType: RecommendationType,
    resourceType: ResourceType,
    usageDatum
  ) => {
    const term = getRecommendationTerm();
    const values = term?.recommendation_engines?.[optimizationType]?.config?.[resourceType]?.[recommendationType];

    const datum = [];
    usageDatum.forEach(data => {
      datum.push({
        ...data,
        name: resourceType === ResourceType.limits ? 'limit' : 'request',
        y: values.amount,
        units: values.format,
      });
    });
    return [
      {
        ...datum[0],
        x: 0, // Extends threshold lines to chart edge
      },
      ...datum,
      {
        ...datum[0],
        x: 100,
      },
    ];
  };

  const createUsageDatum = (usageType: UsageType) => {
    const term = getRecommendationTerm();
    const plotsData = term?.plots?.plots_data;

    const datum = [];
    for (const key of Object.keys(plotsData)) {
      const data = plotsData?.[key]?.[usageType];
      const date = new Date(key);
      const xVal = currentInterval === Interval.short_term ? format(date, 'kk:mm') : format(date, 'MMM d');
      if (data) {
        datum.push({
          key,
          name: usageType,
          units: data.format,
          x: xVal,
          y: [data.min, data.median, data.max, data.q1, data.q3],
        });
      }
    }
    return datum;
  };

  const getRecommendationTerm = (): RecommendationTerm => {
    if (!recommendations) {
      return undefined;
    }

    let result;
    switch (currentInterval) {
      case Interval.short_term:
        result = recommendations?.recommendation_terms?.short_term;
        break;
      case Interval.medium_term:
        result = recommendations?.recommendation_terms?.medium_term;
        break;
      case Interval.long_term:
        result = recommendations?.recommendation_terms?.long_term;
        break;
    }
    return result;
  };

  const getChart = (usageType: UsageType, recommendationType: RecommendationType) => {
    const usageDatum = createUsageDatum(usageType);
    const limitDatum = createRecommendationDatum(recommendationType, ResourceType.limits, usageDatum);
    const requestDatum = createRecommendationDatum(recommendationType, ResourceType.requests, usageDatum);

    return (
      <OptimizationsBreakdownChart
        baseHeight={chartStyles.chartHeight}
        limitData={limitDatum}
        name={`utilization-${usageType}`}
        requestData={requestDatum}
        recommendationType={recommendationType}
        usageData={usageDatum}
      />
    );
  };

  return (
    <Grid hasGutter>
      <GridItem xl={6}>
        <div style={styles.container}>
          <div style={styles.cardContainer}>
            <Card isPlain>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes.lg}>
                  {intl.formatMessage(messages.currentCpuUtilization)}
                </Title>
              </CardTitle>
              <CardBody>{getChart(UsageType.cpuUsage, RecommendationType.cpu)}</CardBody>
            </Card>
          </div>
          <Divider
            orientation={{
              default: 'vertical',
            }}
            style={styles.dividerContainer}
          />
        </div>
      </GridItem>
      <GridItem xl={6}>
        <Card isPlain>
          <CardTitle>
            <Title headingLevel="h2" size={TitleSizes.lg}>
              {intl.formatMessage(messages.currentMemoryUtilization)}
            </Title>
          </CardTitle>
          <CardBody>{getChart(UsageType.memoryUsage, RecommendationType.memory)}</CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

export { OptimizationsBreakdownUtilization };
