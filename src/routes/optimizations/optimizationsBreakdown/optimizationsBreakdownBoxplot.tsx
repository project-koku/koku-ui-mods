import './optimizationsBreakdown.scss';

import {
  Chart,
  ChartAxis,
  ChartBoxPlot,
  ChartLegendTooltip,
  ChartThemeColor,
  ChartThreshold,
  createContainer,
} from '@patternfly/react-charts';
import { Card, CardBody, CardTitle, Divider, Grid, GridItem, Title, TitleSizes } from '@patternfly/react-core';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/js/chart_color_orange_300';
import type { RecommendationItems } from 'api/ros/recommendations';
import type { RecommendationTerm } from 'api/ros/recommendations';
import { format } from 'date-fns';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import type { OptimizationType } from 'utils/recomendations';
import { Interval, UsageType } from 'utils/recomendations';

import { styles } from './optimizationsBreakdownBoxplot.styles';

interface OptimizationsBreakdownBoxplotOwnProps {
  currentInterval?: Interval.short_term | Interval.medium_term | Interval.long_term;
  optimizationType?: OptimizationType;
  recommendations?: RecommendationItems;
}

type OptimizationsBreakdownBoxplotProps = OptimizationsBreakdownBoxplotOwnProps;

const OptimizationsBreakdownBoxplot: React.FC<OptimizationsBreakdownBoxplotProps> = ({
  currentInterval,
  // optimizationType,
  recommendations,
}) => {
  const intl = useIntl();

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

  const createDatum = (usageType: UsageType.cpuUsage | UsageType.memoryUsage) => {
    const term = getRecommendationTerm();
    const plotsData = term?.plots?.plots_data;

    const datum = [];
    for (const key of Object.keys(plotsData)) {
      const data = plotsData?.[key]?.[usageType];
      const date = new Date(key);
      const xVal = currentInterval === Interval.short_term ? format(date, 'kk:mm') : format(date, 'MMM d');
      if (data) {
        datum.push({
          x: xVal,
          y: [data.min, data.median, data.max, data.q1, data.q3],
          units: data.format,
        });
      }
    }
    return datum;
  };

  const getBoxplot = (usageType: UsageType.cpuUsage | UsageType.memoryUsage) => {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
    const legendData = [
      { childName: 'cats', name: 'Cats' },
      {
        childName: 'limit',
        name: 'Limit',
        symbol: { fill: chart_color_orange_300.var, type: 'threshold' },
      },
    ];

    const labelFormatter = datum => {
      // With box plot data, datum.y will also be an array
      if (datum && (datum._min || datum._median || datum._max || datum._q1 || datum._q3)) {
        return `q1: ${datum._q1}, q3: ${datum._q3}`;
      }
      return `${datum.y !== null ? datum.y : 'no data'}`;
    };

    return (
      <div style={{ height: '350px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Embedded legend example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => labelFormatter(datum)}
              labelComponent={<ChartLegendTooltip legendData={legendData} title={datum => datum.x} />}
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          domain={{ y: [0, 13] }}
          domainPadding={{ x: [30, 25] }}
          legendData={legendData}
          legendPosition="bottom"
          height={350}
          name="chart5"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 10,
          }}
          themeColor={ChartThemeColor.green}
          width={600}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartBoxPlot data={createDatum(usageType)} name="cats" />
          <ChartThreshold
            data={[]}
            name="limit"
            style={{
              data: {
                stroke: chart_color_orange_300.var,
              },
            }}
          />
        </Chart>
      </div>
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
              <CardBody>{getBoxplot(UsageType.cpuUsage)}</CardBody>
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
          <CardBody>Chart 2</CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

export { OptimizationsBreakdownBoxplot };
