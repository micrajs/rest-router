/// <reference types="@micra/core/router" />
/// <reference types="@micra/router/register" />
/// <reference types="@micra/core/service-provider" />
/// <reference types="@micra/core/request-handler" />

declare global {
  namespace Application {
    interface Routers {
      get: Micra.RouteCreator;
      post: Micra.RouteCreator;
      put: Micra.RouteCreator;
      patch: Micra.RouteCreator;
      delete: Micra.RouteCreator;
    }
  }
}

export {};
