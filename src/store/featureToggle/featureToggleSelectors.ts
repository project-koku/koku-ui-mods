import type { RootState } from 'store/rootReducer';

import { stateKey } from './featureToggleReducer';

export const selectFeatureToggleState = (state: RootState) => state[stateKey];

export const selectHasFeatureToggle = (state: RootState) => selectFeatureToggleState(state).hasFeatureToggle;

export const selectIsDebugFlagEnabled = (state: RootState) => selectFeatureToggleState(state).isDebugFlagEnabled;
export const selectIsUtilizationFlagEnabled = (state: RootState) =>
  selectFeatureToggleState(state).isUtilizationFlagEnabled;
