import { useUnleashClient } from '@unleash/proxy-client-react';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { featureFlagsActions } from 'store/featureFlags';

// eslint-disable-next-line no-shadow
export const enum FeatureToggle {
  isUtilizationFeatureEnabled = 'cost-management.ui.mfe.utilization', // https://issues.redhat.com/browse/COST-4619
}

// The FeatureFlags component saves feature flags in store for places where Unleash hooks not available
const useFeatureFlags = () => {
  const client = useUnleashClient();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // Workaround for code that doesn't use hooks
    const flags = {
      isUtilizationFeatureEnabled:
        client.isEnabled(FeatureToggle.isUtilizationFeatureEnabled) && insights?.chrome?.isBeta(),
    };
    dispatch(featureFlagsActions.setFeatureFlags(flags));
  });
};

export default useFeatureFlags;
