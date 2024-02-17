export const data = {
  data: [
    {
      cluster_name: 'cluster-one-division-bell',
      kubernetes_objects: [
        {
          type: 'deployment',
          name: 'tfb-qrh-deployment_5',
          namespace: 'default_5',
          containers: [
            {
              container_image_name: 'kruize/tfb-qrh:1.13.2.F_et17',
              container_name: 'tfb-server-1',
              recommendations: {
                version: '1.0',
                notifications: {
                  '111000': {
                    type: 'info',
                    message: 'Recommendations Are Available',
                    code: 111000,
                  },
                },
                data: {
                  '2024-01-21T00:00:00.000Z': {
                    notifications: {
                      '111101': {
                        type: 'info',
                        message: 'Short Term Recommendations Available',
                        code: 111101,
                      },
                      '111103': {
                        type: 'info',
                        message: 'Long Term Recommendations Available',
                        code: 111103,
                      },
                      '111102': {
                        type: 'info',
                        message: 'Medium Term Recommendations Available',
                        code: 111102,
                      },
                    },
                    monitoring_end_time: '2024-01-21T00:00:00.000Z',
                    current: {
                      requests: {
                        memory: {
                          amount: 50.21,
                          format: 'MiB',
                        },
                        cpu: {
                          amount: 1.1,
                          format: 'cores',
                        },
                      },
                      limits: {
                        memory: {
                          amount: 100.0,
                          format: 'MiB',
                        },
                        cpu: {
                          amount: 0.5,
                          format: 'cores',
                        },
                      },
                    },
                    recommendation_terms: {
                      short_term: {
                        duration_in_hours: 24.0,
                        notifications: {
                          '112101': {
                            type: 'info',
                            message: 'Cost Recommendations Available',
                            code: 112101,
                          },
                          '112102': {
                            type: 'info',
                            message: 'Performance Recommendations Available',
                            code: 112102,
                          },
                        },
                        monitoring_start_time: '2024-01-20T00:00:00.000Z',
                        recommendation_engines: {
                          cost: {
                            pods_count: 7,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: -0.17000000000000015,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.42999999999999994,
                                  format: 'cores',
                                },
                              },
                            },
                            notifications: {},
                          },
                          performance: {
                            pods_count: 7,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: -0.17000000000000015,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.42999999999999994,
                                  format: 'cores',
                                },
                              },
                            },
                            notifications: {},
                          },
                        },
                        plots: {
                          datapoints: 4,
                          plots_data: {
                            '2024-01-20T12:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T06:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T18:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-21T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                          },
                        },
                      },
                      medium_term: {
                        duration_in_hours: 168.0,
                        notifications: {
                          '112101': {
                            type: 'info',
                            message: 'Cost Recommendations Available',
                            code: 112101,
                          },
                          '112102': {
                            type: 'info',
                            message: 'Performance Recommendations Available',
                            code: 112102,
                          },
                        },
                        monitoring_start_time: '2024-01-14T00:00:00.000Z',
                        recommendation_engines: {
                          cost: {
                            pods_count: 7,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: -0.17000000000000015,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.42999999999999994,
                                  format: 'cores',
                                },
                              },
                            },
                            notifications: {},
                          },
                          performance: {
                            pods_count: 7,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: -0.17000000000000015,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.42999999999999994,
                                  format: 'cores',
                                },
                              },
                            },
                            notifications: {},
                          },
                        },
                        plots: {
                          datapoints: 7,
                          plots_data: {
                            '2024-01-18T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-15T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-19T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-17T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-16T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-21T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                          },
                        },
                      },
                      long_term: {
                        duration_in_hours: 360.0,
                        notifications: {
                          '112101': {
                            type: 'info',
                            message: 'Cost Recommendations Available',
                            code: 112101,
                          },
                          '112102': {
                            type: 'info',
                            message: 'Performance Recommendations Available',
                            code: 112102,
                          },
                        },
                        monitoring_start_time: '2024-01-06T00:00:00.000Z',
                        recommendation_engines: {
                          cost: {
                            pods_count: 7,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: -0.17000000000000015,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.42999999999999994,
                                  format: 'cores',
                                },
                              },
                            },
                            notifications: {},
                          },
                          performance: {
                            pods_count: 7,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.9299999999999999,
                                  format: 'cores',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: -0.17000000000000015,
                                  format: 'cores',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                                cpu: {
                                  amount: 0.42999999999999994,
                                  format: 'cores',
                                },
                              },
                            },
                            notifications: {},
                          },
                        },
                        plots: {
                          datapoints: 15,
                          plots_data: {
                            '2024-01-10T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-15T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-09T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-14T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-19T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-08T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-13T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-18T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-07T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-17T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-12T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-16T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-21T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-11T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            {
              container_image_name: 'kruize/tfb-db:1.15',
              container_name: 'tfb-server-0',
              recommendations: {
                version: '1.0',
                notifications: {
                  '111000': {
                    type: 'info',
                    message: 'Recommendations Are Available',
                    code: 111000,
                  },
                },
                data: {
                  '2024-01-21T00:00:00.000Z': {
                    notifications: {
                      '223002': {
                        type: 'error',
                        message: 'Invalid Amount in CPU Section',
                        code: 223002,
                      },
                      '111101': {
                        type: 'info',
                        message: 'Short Term Recommendations Available',
                        code: 111101,
                      },
                      '111103': {
                        type: 'info',
                        message: 'Long Term Recommendations Available',
                        code: 111103,
                      },
                      '111102': {
                        type: 'info',
                        message: 'Medium Term Recommendations Available',
                        code: 111102,
                      },
                    },
                    monitoring_end_time: '2024-01-21T00:00:00.000Z',
                    current: {
                      requests: {
                        memory: {
                          amount: 50.21,
                          format: 'MiB',
                        },
                      },
                      limits: {
                        memory: {
                          amount: 100.0,
                          format: 'MiB',
                        },
                      },
                    },
                    recommendation_terms: {
                      short_term: {
                        duration_in_hours: 24.0,
                        notifications: {
                          '112101': {
                            type: 'info',
                            message: 'Cost Recommendations Available',
                            code: 112101,
                          },
                          '112102': {
                            type: 'info',
                            message: 'Performance Recommendations Available',
                            code: 112102,
                          },
                        },
                        monitoring_start_time: '2024-01-20T00:00:00.000Z',
                        recommendation_engines: {
                          cost: {
                            pods_count: 0,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            notifications: {
                              '221001': {
                                type: 'error',
                                message: 'Number of pods cannot be zero',
                                code: 221001,
                              },
                            },
                          },
                          performance: {
                            pods_count: 0,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            notifications: {
                              '221001': {
                                type: 'error',
                                message: 'Number of pods cannot be zero',
                                code: 221001,
                              },
                            },
                          },
                        },
                        plots: {
                          datapoints: 4,
                          plots_data: {
                            '2024-01-20T12:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T06:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T18:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-21T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                          },
                        },
                      },
                      medium_term: {
                        duration_in_hours: 168.0,
                        notifications: {
                          '112101': {
                            type: 'info',
                            message: 'Cost Recommendations Available',
                            code: 112101,
                          },
                          '112102': {
                            type: 'info',
                            message: 'Performance Recommendations Available',
                            code: 112102,
                          },
                        },
                        monitoring_start_time: '2024-01-14T00:00:00.000Z',
                        recommendation_engines: {
                          cost: {
                            pods_count: 0,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            notifications: {
                              '221001': {
                                type: 'error',
                                message: 'Number of pods cannot be zero',
                                code: 221001,
                              },
                            },
                          },
                          performance: {
                            pods_count: 0,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            notifications: {
                              '221001': {
                                type: 'error',
                                message: 'Number of pods cannot be zero',
                                code: 221001,
                              },
                            },
                          },
                        },
                        plots: {
                          datapoints: 7,
                          plots_data: {
                            '2024-01-18T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-15T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-19T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-17T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-16T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-21T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                          },
                        },
                      },
                      long_term: {
                        duration_in_hours: 360.0,
                        notifications: {
                          '112101': {
                            type: 'info',
                            message: 'Cost Recommendations Available',
                            code: 112101,
                          },
                          '112102': {
                            type: 'info',
                            message: 'Performance Recommendations Available',
                            code: 112102,
                          },
                        },
                        monitoring_start_time: '2024-01-06T00:00:00.000Z',
                        recommendation_engines: {
                          cost: {
                            pods_count: 0,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            notifications: {
                              '221001': {
                                type: 'error',
                                message: 'Number of pods cannot be zero',
                                code: 221001,
                              },
                            },
                          },
                          performance: {
                            pods_count: 0,
                            confidence_level: 0.0,
                            config: {
                              requests: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 238.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            variation: {
                              requests: {
                                memory: {
                                  amount: 187.98999999999998,
                                  format: 'MiB',
                                },
                              },
                              limits: {
                                memory: {
                                  amount: 138.2,
                                  format: 'MiB',
                                },
                              },
                            },
                            notifications: {
                              '221001': {
                                type: 'error',
                                message: 'Number of pods cannot be zero',
                                code: 221001,
                              },
                            },
                          },
                        },
                        plots: {
                          datapoints: 15,
                          plots_data: {
                            '2024-01-10T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-15T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-20T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-09T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-14T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-19T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-08T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-13T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-18T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-07T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-17T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-12T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-16T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-21T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                            '2024-01-11T00:00:00.000Z': {
                              cpuUsage: {
                                min: 0.0,
                                q1: 2.5,
                                median: 5.0,
                                q3: 7.5,
                                max: 10.0,
                                format: 'cores',
                              },
                              memoryUsage: {
                                min: 0.0,
                                q1: 25.0,
                                median: 50.0,
                                q3: 75.0,
                                max: 100.0,
                                format: 'MiB',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      version: 'v2.0',
      experiment_name: 'experimentHappyPath_1',
    },
  ],
  data2: [
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
                      amount: 7,
                      format: 'm',
                    },
                    memory: {
                      amount: 394.99,
                      format: 'Mi',
                    },
                  },
                  requests: {
                    cpu: {
                      amount: 7,
                      format: 'm',
                    },
                    memory: {
                      amount: 394.99,
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
