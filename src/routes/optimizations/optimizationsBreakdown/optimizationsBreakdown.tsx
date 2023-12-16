import './optimizationsBreakdown.scss';

import { Alert, List, ListItem, PageSection } from '@patternfly/react-core';
import type { Query } from 'api/queries/query';
import { parseQuery } from 'api/queries/query';
import type { RecommendationReportData } from 'api/ros/recommendations';
import { RosPathsType, RosType } from 'api/ros/ros';
import type { AxiosError } from 'axios';
import messages from 'locales/messages';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import { Loading } from 'routes/components/page/loading';
import type { RootState } from 'store';
import { FetchStatus } from 'store/common';
import { rosActions, rosSelectors } from 'store/ros';
import { breadcrumbLabelKey } from 'utils/props';
import { getNotifications, hasRecommendation, Interval, OptimizationType } from 'utils/recomendations';

import { data } from './data';
import { styles } from './optimizationsBreakdown.styles';
import { OptimizationsBreakdownConfiguration } from './optimizationsBreakdownConfiguration';
import { OptimizationsBreakdownHeader } from './optimizationsBreakdownHeader';

interface OptimizationsBreakdownOwnProps {
  // TBD...
}

interface OptimizationsBreakdownStateProps {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  report?: RecommendationReportData;
  reportError?: AxiosError;
  reportFetchStatus?: FetchStatus;
  reportQueryString?: string;
}

type OptimizationsBreakdownProps = OptimizationsBreakdownOwnProps & OptimizationsBreakdownStateProps;

const reportType = RosType.ros as any;
const reportPathsType = RosPathsType.recommendation as any;

const OptimizationsBreakdown: React.FC<OptimizationsBreakdownProps> = () => {
  const { breadcrumbLabel, breadcrumbPath, report, reportFetchStatus } = useMapToProps();
  const [optimizationType] = useState(OptimizationType.cost);
  const intl = useIntl();

  const getDefaultInterval = () => {
    let result = Interval.short_term;
    const terms = report?.recommendations?.recommendation_terms;

    if (!terms) {
      return result;
    }

    if (hasRecommendation(terms?.short_term?.recommendation_engines?.[optimizationType]?.config)) {
      result = Interval.short_term;
    } else if (hasRecommendation(terms?.medium_term?.recommendation_engines?.[optimizationType]?.config)) {
      result = Interval.medium_term;
    } else if (hasRecommendation(terms?.long_term?.recommendation_engines?.[optimizationType]?.config)) {
      result = Interval.long_term;
    }
    return result as Interval;
  };

  const [currentInterval, setCurrentInterval] = useState(getDefaultInterval());

  const getAlert = () => {
    let notifications;
    if (report?.recommendations?.recommendation_terms?.[currentInterval]) {
      notifications = getNotifications(report.recommendations.recommendation_terms[currentInterval]);
    }

    if (notifications.length === 0) {
      return null;
    }

    return (
      <div style={styles.alertContainer}>
        <Alert isInline variant="warning" title={intl.formatMessage(messages.notificationsAlertTitle)}>
          <List>
            {notifications.map((notification, index) => (
              <ListItem key={index}>{notification.message}</ListItem>
            ))}
          </List>
        </Alert>
      </div>
    );
  };

  const handleOnSelected = (value: Interval) => {
    setCurrentInterval(value);
  };

  const isLoading = reportFetchStatus === FetchStatus.inProgress;

  return (
    <div style={styles.container}>
      <OptimizationsBreakdownHeader
        breadcrumbLabel={breadcrumbLabel}
        breadcrumbPath={breadcrumbPath}
        currentInterval={currentInterval}
        isDisabled={isLoading}
        onSelected={handleOnSelected}
        optimizationType={optimizationType}
        report={report}
      />
      <PageSection isFilled>
        {isLoading ? (
          <Loading
            body={intl.formatMessage(messages.optimizationsLoadingStateDesc)}
            heading={intl.formatMessage(messages.optimizationsLoadingStateTitle)}
          />
        ) : (
          <>
            {getAlert()}
            <OptimizationsBreakdownConfiguration
              currentInterval={currentInterval}
              optimizationType={optimizationType}
              recommendations={report?.recommendations}
            />
          </>
        )}
      </PageSection>
    </div>
  );
};

const useQueryFromRoute = () => {
  const location = useLocation();
  return parseQuery<Query>(location.search);
};

// eslint-disable-next-line no-empty-pattern
const useMapToProps = (): OptimizationsBreakdownStateProps => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const queryFromRoute = useQueryFromRoute();
  const location = useLocation();

  const reportQueryString = queryFromRoute ? queryFromRoute.id : ''; // Flatten ID
  let report: any = useSelector((state: RootState) =>
    rosSelectors.selectRos(state, reportPathsType, reportType, reportQueryString)
  );
  // Todo: Update to use new API response
  report = data.data[0];
  const reportFetchStatus = useSelector((state: RootState) =>
    rosSelectors.selectRosFetchStatus(state, reportPathsType, reportType, reportQueryString)
  );
  const reportError = useSelector((state: RootState) =>
    rosSelectors.selectRosError(state, reportPathsType, reportType, reportQueryString)
  );

  useEffect(() => {
    if (!reportError && reportFetchStatus !== FetchStatus.inProgress) {
      dispatch(rosActions.fetchRosReport(reportPathsType, reportType, reportQueryString));
    }
  }, [reportQueryString]);

  return {
    breadcrumbLabel: queryFromRoute[breadcrumbLabelKey],
    breadcrumbPath: location?.state?.optimizations ? location.state.optimizations.breadcrumbPath : undefined,
    report,
    reportError,
    reportFetchStatus,
    reportQueryString,
  };
};

export default OptimizationsBreakdown;
