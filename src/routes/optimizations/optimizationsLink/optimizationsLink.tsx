import { getQuery } from 'api/queries/query';
import type { RosReport } from 'api/ros/ros';
import { RosPathsType, RosType } from 'api/ros/ros';
import type { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import type { RootState } from 'store';
import { FetchStatus } from 'store/common';
import { rosActions, rosSelectors } from 'store/ros';

export interface OptimizationsLinkOwnProps {
  groupBy?: string;
  groupByValue?: string;
  state?: any;
  toPath?: string;
}

export interface OptimizationsLinkStateProps {
  report?: RosReport;
  reportError?: AxiosError;
  reportFetchStatus?: FetchStatus;
  reportQueryString?: string;
}

type OptimizationsLinkProps = OptimizationsLinkOwnProps & OptimizationsLinkStateProps;

const reportPathsType = RosPathsType.recommendations;
const reportType = RosType.ros;

const OptimizationsLink: React.FC<OptimizationsLinkProps> = ({
  groupBy,
  groupByValue,
  state,
  toPath,
}: OptimizationsLinkOwnProps) => {
  const { report } = useMapToProps({ groupBy, groupByValue });

  const count = report?.meta ? report.meta.count : 0;

  if (count === 0) {
    return count;
  }
  return (
    <Link
      to={toPath}
      state={{
        ...(state && state),
      }}
    >
      {count} TEST
    </Link>
  );
};

const useMapToProps = ({ groupBy, groupByValue }: OptimizationsLinkOwnProps): OptimizationsLinkStateProps => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const reportQuery = {
    ...(groupBy && groupByValue && { [groupBy]: groupByValue }), // project filter
  };
  const reportQueryString = getQuery(reportQuery);
  const report: any = useSelector((state: RootState) =>
    rosSelectors.selectRos(state, reportPathsType, reportType, reportQueryString)
  );
  const reportFetchStatus = useSelector((state: RootState) =>
    rosSelectors.selectRosFetchStatus(state, reportPathsType, reportType, reportQueryString)
  );
  const reportError = useSelector((state: RootState) =>
    rosSelectors.selectRosError(state, reportPathsType, reportType, reportQueryString)
  );

  useEffect(() => {
    if (groupByValue && !reportError && reportFetchStatus !== FetchStatus.inProgress) {
      dispatch(rosActions.fetchRosReport(reportPathsType, reportType, reportQueryString));
    }
  }, [groupByValue, reportQueryString]);

  return {
    report,
    reportError,
    reportFetchStatus,
    reportQueryString,
  };
};

export default OptimizationsLink;
