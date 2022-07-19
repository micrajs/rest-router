import {RESTRouterExtension} from './data/utilities/RESTRouterExtension';
import {RESTRouteHandler} from './data/handlers/RESTRouteHandler';

export const RESTRouterServiceProvider: Micra.ServiceProvider = {
  async boot({container}) {
    const router = container.use('router');
    const requestHandler = container.use('request-handler');

    router.extend(RESTRouterExtension);
    requestHandler.use(RESTRouteHandler);
  },
};
