import 'routes/components/charts/common/chart.scss';

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBoxPlot,
  ChartCursorTooltip,
  ChartLegend,
  ChartPoint,
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
import { RecommendationType } from 'utils/recomendations';

import { chartStyles, styles } from './optimizationsBreakdownChart.styles';

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
    const dx = recommendationType === RecommendationType.cpu ? 50 : 45;

    // Custom HTML component to create a legend layout
    const HtmlLegendContent: any = ({ datum, legendData, text, title, x, y }) => {
      return (
        <g>
          <foreignObject height="100%" width="100%" x={x - dx} y={y - 55}>
            <table>
              <thead>
                <tr>
                  <th colSpan={2} style={{ ...styles.base, fontWeight: 700 }}>
                    {title(datum)}
                  </th>
                </tr>
              </thead>
              <tbody>
                {text.map((val, index) => (
                  <tr key={`tbody-tr-${index}`} style={styles.base}>
                    <td style={styles.symbolColumn}>
                      <svg height="9.74" width="9.74">
                        <g>
                          <rect
                            role="presentation"
                            shapeRendering="auto"
                            width="9.74"
                            height="9.74"
                            style={{ ...legendData[index].symbol }}
                          >
                            {
                              <ChartPoint
                                x={0}
                                y={0}
                                symbol={legendData[index].symbol ? legendData[index].symbol.type : 'square'}
                                size={5.6}
                              />
                            }
                          </rect>
                        </g>
                      </svg>
                    </td>
                    <td style={styles.nameColumn}>{legendData[index].name}</td>
                    <td style={styles.valueColumn}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </foreignObject>
        </g>
      );
    };

    return cursorVoronoiContainer
      ? React.cloneElement(cursorVoronoiContainer, {
          disable: !isDataAvailable(series, hiddenSeries),
          labelComponent: (
            <ChartCursorTooltip
              flyoutHeight={135}
              flyoutWidth={375}
              labelComponent={
                <HtmlLegendContent legendData={getLegendData(series, hiddenSeries, true)} title={datum => datum.x} />
              }
            />
          ),
        } as any)
      : undefined;
  };

  const getChart = (serie: ChartSeries, index: number) => {
    if (serie.childName === 'usage') {
      return (
        <ChartBoxPlot
          data={!hiddenSeries.has(index) ? serie.data : [{ y: null }]}
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

      // With box plot data, datum.y will also be an array
      if (datum && (datum._min || datum._max || datum._median || datum._q1 || datum._q3)) {
        return intl.formatMessage(messages.chartBoxplotTooltip, {
          min: formatValue(datum._min),
          max: formatValue(datum._max),
          median: formatValue(datum._median),
          q1: formatValue(datum._q1),
          q3: formatValue(datum._q3),
        });
      }
      return `${datum.y && datum.y !== null ? datum.y : intl.formatMessage(messages.chartNoData)}`;
    };

    // labels={({ datum }) => labelFormatter(datum)}
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
          tooltip: intl.formatMessage(messages.recommendedLimit),
        },
        style: {
          data: {
            ...chartStyles.limit,
            stroke: chartStyles.limitColorScale[0],
          },
        },
      });
    }
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
          tooltip: intl.formatMessage(messages.recommendedRequest),
        },
        style: {
          data: {
            ...chartStyles.request,
            stroke: chartStyles.requestColorScale[0],
          },
        },
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
          legendData={getLegendData(series, hiddenSeries)}
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
