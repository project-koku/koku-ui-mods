import { notificationsMiddleware } from '@redhat-cloud-services/frontend-components-notifications/notificationsMiddleware';
import { configureStore as createStore } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from './rootReducer';
import { rootReducer } from './rootReducer';

// See https://redux-toolkit.js.org/api/serializabilityMiddleware
// and https://github.com/RedHatInsights/insights-advisor-frontend/blob/master/src/Store/index.js
export const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true,
      ignoreState: true,
    },
  }).concat(notificationsMiddleware());

export function configureStore(initialState: Partial<RootState>) {
  const store = createStore({
    middleware,
    preloadedState: initialState as any,
    reducer: rootReducer,
  });

  axios.interceptors.response.use(null, error => {
    return Promise.reject(error);
  });

  return store;
}

export const mfeStore = configureStore({});
