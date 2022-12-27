import client from 'prom-client';

export const register = new client.Registry();
client.collectDefaultMetrics({
    prefix: 'node_',
    gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
    register
});
export const httpRequestTimer = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
});
register.registerMetric(httpRequestTimer);
