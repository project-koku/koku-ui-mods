import type { Notification, RecommendationTerm, RecommendationTerms } from 'api/ros/recommendations';
import type { RecommendationValues } from 'api/ros/recommendations';

// eslint-disable-next-line no-shadow
export const enum ConfigType {
  current = 'current',
  recommended = 'recommended',
}

// eslint-disable-next-line no-shadow
export const enum Interval {
  short_term = 'short_term', // last 24 hrs
  medium_term = 'medium_term', // last 7 days
  long_term = 'long_term', // last 15 days
}

// eslint-disable-next-line no-shadow
export const enum EngineType {
  config = 'config',
  variation = 'variation',
}

// eslint-disable-next-line no-shadow
export const enum OptimizationType {
  cost = 'cost',
  performance = 'performance',
}

export const filterNotifications = (notifications: Notification[]) => {
  return notifications?.filter(notification => notification.code !== 112101 && notification.code !== 112102);
};

export const getNotifications = (term: RecommendationTerm): Notification[] => {
  if (!term?.notifications) {
    return undefined;
  }
  const notifications = Object.keys(term.notifications).map(key => term.notifications[key]);
  return filterNotifications(notifications);
};

export const hasNotification = (term: RecommendationTerm) => {
  const notifications = getNotifications(term);
  return notifications?.length > 0;
};

export const hasRecommendation = (values: RecommendationValues) => {
  if (!values) {
    return false;
  }

  const hasConfigLimitsCpu = hasRecommendationValues(values, 'limits', 'cpu');
  const hasConfigLimitsMemory = hasRecommendationValues(values, 'limits', 'memory');
  const hasConfigRequestsCpu = hasRecommendationValues(values, 'requests', 'cpu');
  const hasConfigRequestsMemory = hasRecommendationValues(values, 'requests', 'memory');

  return hasConfigLimitsCpu || hasConfigLimitsMemory || hasConfigRequestsCpu || hasConfigRequestsMemory;
};

// Helper to determine if config and variation are empty objects
// Example: key1 = config, key2 = limits, key3 = cpu
export const hasRecommendationValues = (
  values: RecommendationValues,
  key1: 'limits' | 'requests',
  key2: 'cpu' | 'memory'
) => {
  let result = false;
  if (values && values[key1] && values[key1][key2]) {
    result = Object.keys(values[key1][key2]).length > 0;
  }
  return result;
};

export const hasWarning = (terms: RecommendationTerms) => {
  if (!terms) {
    return false;
  }
  return hasNotification(terms.short_term) || hasNotification(terms.medium_term) || hasNotification(terms.long_term);
};
