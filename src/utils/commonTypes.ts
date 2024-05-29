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

// eslint-disable-next-line no-shadow
export const enum RecommendationType {
  cpu = 'cpu',
  memory = 'memory',
}

// eslint-disable-next-line no-shadow
export const enum ResourceType {
  limits = 'limits',
  requests = 'requests',
}

// eslint-disable-next-line no-shadow
export const enum UsageType {
  cpuUsage = 'cpuUsage',
  memoryUsage = 'memoryUsage',
}
