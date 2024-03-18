import { createAction } from 'typesafe-actions';

export interface FeatureToggleActionMeta {
  isDebugFlagEnabled?: boolean;
  isUtilizationFlagEnabled?: boolean;
}

export const setFeatureToggle = createAction('feature/init_feature_toggle')<FeatureToggleActionMeta>();
export const resetState = createAction('feature/reset_state')();
