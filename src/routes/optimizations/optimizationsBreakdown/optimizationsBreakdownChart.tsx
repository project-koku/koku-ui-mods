import 'routes/components/charts/common/chart.scss';

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBoxPlot,
  ChartLegend,
  ChartLegendTooltip,
  createContainer,
  getInteractiveLegendEvents,
} from '@patternfly/react-charts';
import messages from 'locales/messages';
import React, { useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import type { ChartSeries } from 'routes/components/charts/common/chartUtils';
import {
  getChartNames,
  getDomain,
  getLegendData,
  getResizeObserver,
  initHiddenSeries,
  isDataAvailable,
  isSeriesHidden,
} from 'routes/components/charts/common/chartUtils';
import ChartTheme from 'routes/components/charts/theme';
import { unitsLookupKey } from 'utils/format';
import { RecommendationType } from 'utils/recomendations';

import { chartStyles } from './optimizationsBreakdownChart.styles';

interface OptimizationsBreakdownChartOwnProps {
  baseHeight?: number;
  limitData?: any;
  name?: string;
  padding?: any;
  recommendationType: RecommendationType;
  requestData?: any;
  usageData?: any;
}

type OptimizationsBreakdownChartProps = OptimizationsBreakdownChartOwnProps;

const OptimizationsBreakdownChart: React.FC<OptimizationsBreakdownChartProps> = ({
  baseHeight,
  name,
  limitData,
  padding,
  recommendationType,
  requestData,
  usageData,
}) => {
  const [containerRef] = useState(React.createRef<HTMLDivElement>());
  const [cursorVoronoiContainer, setCursorVoronoiContainer] = useState<any>();
  const [extraHeight, setExtraHeight] = useState(0);
  const [hiddenSeries, setHiddenSeries] = useState(new Set<number>());
  const [series, setSeries] = useState<ChartSeries[]>();
  const [width, setWidth] = useState(0);
  const intl = useIntl();

  // Clone original container. See https://issues.redhat.com/browse/COST-762
  const cloneContainer = () => {
    const legendData = getLegendData(series, hiddenSeries, true);
    // Force extra space for line wrapping
    legendData?.push(
      {
        childName: 'usage',
        name: '',
        symbol: {
          fill: 'none',
        },
      },
      {
        childName: 'usage',
        name: '',
        symbol: {
          fill: 'none',
        },
      }
    );
    return cursorVoronoiContainer
      ? React.cloneElement(cursorVoronoiContainer, {
          disable: !isDataAvailable(series, hiddenSeries),
          labelComponent: <ChartLegendTooltip legendData={legendData} title={datum => datum.x} />,
        } as any)
      : undefined;
  };

  const getChart = (serie: ChartSeries, index: number) => {
    if (serie.childName === 'usage') {
      return (
        <ChartBoxPlot
          data={!hiddenSeries.has(index) ? serie.data : [{ y: [null] }]}
          key={serie.childName}
          name={serie.childName}
          style={serie.style}
        />
      );
    }
    return (
      <ChartArea
        data={!hiddenSeries.has(index) ? serie.data : [{ y: null }]}
        interpolation="monotoneX"
        key={serie.childName}
        name={serie.childName}
        style={serie.style}
      />
    );
  };

  // Returns CursorVoronoiContainer component
  const getCursorVoronoiContainer = () => {
    // Note: Container order is important
    const CursorVoronoiContainer: any = createContainer('voronoi', 'cursor');

    const labelFormatter = datum => {
      const formatValue = val => (val !== undefined ? val : '');
      if (datum && (datum._min || datum._max || datum._median || datum._q1 || datum._q3)) {
        return intl.formatMessage(messages.chartUsageTooltip, {
          br: '\n',
          min: formatValue(datum._min),
          max: formatValue(datum._max),
          median: formatValue(datum._median),
          q1: formatValue(datum._q1),
          q3: formatValue(datum._q3),
          units: intl.formatMessage(messages.units, { units: unitsLookupKey(datum.units) }),
        });
      }

      // With box plot, datum.y will be an array
      const yVal = Array.isArray(datum.y) ? datum.y[0] : datum.y;
      return yVal !== null
        ? intl.formatMessage(messages.valueUnits, {
            value: yVal,
            units: intl.formatMessage(messages.units, { units: unitsLookupKey(datum.units) }),
          })
        : intl.formatMessage(messages.chartNoData);
    };

    return (
      <CursorVoronoiContainer
        cursorDimension="x"
        labels={({ datum }) => labelFormatter(datum)}
        mouseFollowTooltips
        voronoiDimension="x"
        voronoiPadding={getPadding()}
      />
    );
  };

  // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend
  const getEvents = () => {
    const result = getInteractiveLegendEvents({
      chartNames: getChartNames(series),
      isHidden: index => isSeriesHidden(hiddenSeries, index),
      legendName: `${name}-legend`,
      onLegendClick: props => handleOnLegendClick(props.index),
    });
    return result;
  };

  const getHeight = () => {
    return baseHeight + extraHeight;
  };

  const getLegend = () => {
    return (
      <ChartLegend
        data={getLegendData(series, hiddenSeries)}
        height={25}
        gutter={20}
        name={`${name}-legend`}
        responsive={false}
      />
    );
  };

  const getPadding = () => {
    return padding
      ? padding
      : {
          bottom: 75 + extraHeight, // Maintain chart aspect ratio
          left: 50,
          right: 50,
          top: 10,
        };
  };

  const handleLegendAllowWrap = value => {
    if (value !== extraHeight) {
      setExtraHeight(value);
    }
  };

  // Hide each data series individually
  const handleOnLegendClick = (index: number) => {
    const newHiddenSeries = initHiddenSeries(series, hiddenSeries, index);
    setHiddenSeries(newHiddenSeries);
  };

  const handleOnResize = () => {
    const { clientWidth = 0 } = containerRef.current || {};

    if (clientWidth !== width) {
      setWidth(clientWidth);
    }
  };

  const initDatum = () => {
    // Show all legends, regardless of data size

    const newSeries: ChartSeries[] = [];
    if (requestData && requestData.length) {
      newSeries.push({
        childName: 'request',
        data: requestData,
        legendItem: {
          name: intl.formatMessage(messages.recommendedRequest),
          symbol: {
            fill: chartStyles.requestColorScale[0],
            type: 'square',
          },
          tooltip: intl.formatMessage(messages.request),
        },
        style: {
          data: {
            ...chartStyles.request,
            stroke: chartStyles.requestColorScale[0],
          },
        },
      });
    }
    if (limitData && limitData.length) {
      newSeries.push({
        childName: 'limit',
        data: limitData,
        legendItem: {
          name: intl.formatMessage(messages.recommendedLimit),
          symbol: {
            fill: chartStyles.limitColorScale[0],
            type: 'square',
          },
          tooltip: intl.formatMessage(messages.limit),
        },
        style: {
          data: {
            ...chartStyles.limit,
            stroke: chartStyles.limitColorScale[0],
          },
        },
      });
    }
    if (usageData && usageData.length) {
      newSeries.push({
        childName: 'usage',
        data: usageData,
        legendItem: {
          name: intl.formatMessage(recommendationType === RecommendationType.cpu ? messages.cpu : messages.memory),
          symbol: {
            fill: chartStyles.usageColorScale[1],
            type: 'square',
          },
          tooltip: intl.formatMessage(recommendationType === RecommendationType.cpu ? messages.cpu : messages.memory),
        },
        style: {
          median: {
            stroke: chartStyles.usageColorScale[0],
          },
          q1: {
            fill: chartStyles.usageColorScale[1],
          },
          q3: {
            fill: chartStyles.usageColorScale[1],
          },
        } as any,
      });
    }
    setSeries(newSeries);
    setCursorVoronoiContainer(getCursorVoronoiContainer());
    setHiddenSeries(new Set());
  };

  useMemo(() => {
    initDatum();
  }, [limitData, requestData, usageData]);

  useEffect(() => {
    const unobserve = getResizeObserver(containerRef.current, handleOnResize);
    return () => {
      if (unobserve) {
        unobserve();
      }
    };
  }, [containerRef]);

  const chartHeight = getHeight();

  return (
    <div className="chartOverride" ref={containerRef}>
      <div style={{ height: chartHeight }}>
        <Chart
          containerComponent={cloneContainer()}
          domain={getDomain(series, hiddenSeries)}
          domainPadding={{ x: [30, 30] }}
          events={getEvents()}
          height={chartHeight}
          legendAllowWrap={handleLegendAllowWrap}
          legendComponent={getLegend()}
          // legendData={getLegendData(series, hiddenSeries)}
          legendPosition="bottom"
          name={name}
          padding={getPadding()}
          theme={ChartTheme}
          width={width}
        >
          <ChartAxis fixLabelOverlap />
          <ChartAxis dependentAxis showGrid />
          {series &&
            series.map((s, index) => {
              return getChart(s, index);
            })}
        </Chart>
      </div>
    </div>
  );
};

export { OptimizationsBreakdownChart };
