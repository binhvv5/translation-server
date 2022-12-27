import Eureka from 'eureka-js-client';
import config from "config";
const port = config.get("port") as number;
const host = config.get("host") as string;
// @ts-ignore
export const clientEureka = new Eureka({
    // application instance information
    instance: {
        app: 'translation-server',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': port,
            '@enabled': true,
        },
        vipAddress: 'translation-server',
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
