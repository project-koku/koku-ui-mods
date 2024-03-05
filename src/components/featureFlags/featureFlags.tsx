import { useUnleashClient } from '@unleash/proxy-client-react';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { featureFlagsActions } from 'store/featureFlags';

// eslint-disable-next-line no-shadow
export const enum FeatureToggle {
  utilization = 'cost-management.ui.mfe.utilization', // https://issues.redhat.com/browse/COST-4619
}

const useIsFlagEnabled = (flag: FeatureToggle) => {
  const client = useUnleashClient();
  return client.isEnabled(flag);
};

export const useIsUtilizationFeatureEnabled = () => {
  return useIsFlagEnabled(FeatureToggle.utilization) && insights?.chrome?.isBeta();
};

// The FeatureFlags component saves feature flags in store for places where Unleash hooks not available
const useFeatureFlags = () => {
  const dispatch = useDispatch();
  const isUtilizationFeatureEnabled = useIsUtilizationFeatureEnabled();

  useLayoutEffect(() => {
    // Workaround for code that doesn't use hooks
    dispatch(
      featureFlagsActions.setFeatureFlags({
        isUtilizationFeatureEnabled,
      })
    );
  }, [isUtilizationFeatureEnabled]);
};

export default useFeatureFlags;
