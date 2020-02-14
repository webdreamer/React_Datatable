import {FuseUtils} from '@fuse';
import {StationBeanAppConfig} from 'app/main/stationbean/StationBeanAppConfig';

const routeConfigs = [
    StationBeanAppConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs)
];

export default routes;
