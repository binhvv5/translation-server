import Eureka from 'eureka-js-client';

// @ts-ignore
export const client = new Eureka({
    // application instance information
    instance: {
        app: 'translation-server',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': 8080,
            '@enabled': true,
        },
        vipAddress: 'jq.test.something.com',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
    },
});
