import { createMockStoreCreator } from 'store/mockStore';

import { featureToggleSelectors } from '.';
import * as actions from './featureToggleActions';
import { featureToggleReducer, stateKey } from './featureToggleReducer';
import * as selectors from './featureToggleSelectors';

const createUIStore = createMockStoreCreator({
  [stateKey]: featureToggleReducer,
});

test('default state', async () => {
  const store = createUIStore();
  expect(selectors.selectFeatureToggleState(store.getState())).toMatchSnapshot();
});

test('Utilization feature is enabled', async () => {
  const store = createUIStore();
  store.dispatch(actions.setFeatureToggle({ isUtilizationFlagEnabled: true }));
  expect(featureToggleSelectors.selectIsUtilizationFlagEnabled(store.getState())).toBe(true);
});
