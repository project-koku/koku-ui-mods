/**
 * A copy of the actual API response can be found here https://privatebin.corp.redhat.com/?43a5a59efe105c0c#A1Cv2P6ZCGD66q9GDsxm7birihdvUoUKNnqVo3KhVpVt
 * The format changes are referred from here https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 * The updated OpenAPI changes are here https://github.com/RedHatInsights/ros-ocp-backend/blob/eb62aecda69727733f36ce6926a8dd700035e99c/openapi.json
 */

export const data = {
  data: [
    {
      cluster_alias: 'name222',
      cluster_uuid: '222',
      container: 'Yuptoo-service',
      id: '3b55b8f2-fad9-48a7-9598-6ea3a0675546',
      last_reported: '2023-12-08T13:09:29+05:30',
      project: 'Yuptoo-prod',
      recommendations: {
        current: {
          limits: {
            cpu: {
              amount: 1,
              format: null,
            },
            memory: {
              amount: 1,
              format: 'Gi',
            },
          },
          requests: {
            cpu: {
              amount: 1,
              format: null,
            },
            memory: {
              amount: 1,
              format: 'Gi',
            },
          },
        },
        monitoring_end_time: '2023-06-03T00:45:00Z',
        notifications: {
          '111101': {
            code: 111101,
            message: 'Short Term Recommendations Available',
            type: 'info',
          },
        },
        recommendation_terms: {
          long_term: {
            duration_in_hours: 24.7,
            notifications: {
              '120001': {
                code: 120001,
                message: 'There is not enough data available to generate a recommendation.',
                type: 'info',
              },
            },
          },
          medium_term: {
            duration_in_hours: 24.7,
            notifications: {
              '120001': {
                code: 120001,
                message: 'There is not enough data available to generate a recommendation.',
                type: 'info',
              },
            },
          },
          short_term: {
            duration_in_hours: 24,
            monitoring_start_time: '2023-06-02T00:30:01Z',
            notifications: {
              '112101': {
                code: 112101,
                message: 'Cost Recommendations Available',
                type: 'info',
              },
              '112102': {
                code: 112102,
                message: 'Performance Recommendations Available',
                type: 'info',
              },
            },
            recommendation_engines: {
              cost: {
                config: {
                  limits: {
                    cpu: {
                      amount: 60,
                      format: 'm',
                    },
                    memory: {
                      amount: 493.99,
                      format: 'Mi',
                    },
                  },
                  requests: {
                    cpu: {
                      amount: 60,
                      format: 'm',
                    },
                    memory: {
                      amount: 493.99,
                      format: 'Mi',
                    },
                  },
                },
                pods_count: 1,
                variation: {
                  limits: {
                    cpu: {
                      amount: -940,
                      format: 'm',
                    },
                    memory: {
                      amount: -530,
                      format: 'Mi',
                    },
                  },
                  requests: {
                    cpu: {
                      amount: -940,
                      format: 'm',
                    },
                    memory: {
                      amount: -530,
                      format: 'Mi',
                    },
                  },
                },
              },
              performance: {
                config: {
                  limits: {
                    cpu: {
                      amount: 60,
                      format: 'm',
                    },
                    memory: {
                      amount: 493.99,
                      format: 'Mi',
                    },
                  },
                  requests: {
                    cpu: {
                      amount: 60,
                      format: 'm',
                    },
                    memory: {
                      amount: 493.99,
                      format: 'Mi',
                    },
                  },
                },
                pods_count: 1,
                variation: {
                  limits: {
                    cpu: {
                      amount: -940,
                      format: 'm',
                    },
                    memory: {
                      amount: -530,
                      format: 'Mi',
                    },
                  },
                  requests: {
                    cpu: {
                      amount: -940,
                      format: 'm',
                    },
                    memory: {
                      amount: -530,
                      format: 'Mi',
                    },
                  },
                },
              },
            },
          },
        },
      },
      source_id: '111',
      workload: 'Yuptoo-app',
      workload_type: 'replicaset',
    },
  ],
  meta: {
    count: 1,
    limit: 10,
    offset: 0,
  },
  links: {
    first: '/api/cost-management/v1/recommendations/openshift?limit=10&offset=0&start_date=1970-01-01',
    last: '/api/cost-management/v1/recommendations/openshift?limit=10&offset=10&start_date=1970-01-01',
  },
};
