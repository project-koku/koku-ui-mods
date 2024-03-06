import type { ActionType } from 'typesafe-actions';
import { getType } from 'typesafe-actions';

import type { resetState } from './featureToggleActions';
import { setFeatureToggle } from './featureToggleActions';

export type FeatureToggleAction = ActionType<typeof setFeatureToggle | typeof resetState>;

export type FeatureToggleState = Readonly<{
  hasFeatureToggle: boolean;
  isDebugFlagEnabled: boolean;
  isUtilizationFlagEnabled: boolean;
}>;

export const defaultState: FeatureToggleState = {
  hasFeatureToggle: false,
  isDebugFlagEnabled: false,
  isUtilizationFlagEnabled: false,
};

export const stateKey = 'featureToggle';

export function featureToggleReducer(state = defaultState, action: FeatureToggleAction): FeatureToggleState {
  switch (action.type) {
    case getType(setFeatureToggle):
      return {
        ...state,
        hasFeatureToggle: true,
        isDebugFlagEnabled: action.payload.isDebugFlagEnabled,
        isUtilizationFlagEnabled: action.payload.isUtilizationFlagEnabled,
      };

    default:
      return state;
  }
}
