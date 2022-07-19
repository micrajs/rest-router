import {getRequestBody} from '@micra/request-handler/utilities';
import {executeRouteHandler} from '@micra/router';

export const RESTRouteHandler: Micra.RequestHandler =
  async function RESTRouteHandler(partial) {
    const {request, use} = partial;
    const url = new URL(request.url);
    const body = await getRequestBody(request);
    const method =
      request.method.toUpperCase() === 'POST' && body?.__method
        ? body.__method
        : request.method.toUpperCase();
    const route = use('router').registry.find(url.pathname, method);

    if (route) {
      return await executeRouteHandler({
        method,
        route,
        context: {
          ...partial,
          params: route.path.match(url.pathname),
        },
        middlewares: use('router').registry.middlewares,
      });
    }
  };
