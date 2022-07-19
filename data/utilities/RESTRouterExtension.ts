export const RESTRouterExtension: Partial<Micra.RouterExtensionDefinition> = {
  get: (base) => (path, serviceOrHandler) =>
    base.register(['GET'], path, serviceOrHandler),
  post: (base) => (path, serviceOrHandler) =>
    base.register(['POST'], path, serviceOrHandler),
  put: (base) => (path, serviceOrHandler) =>
    base.register(['PUT'], path, serviceOrHandler),
  patch: (base) => (path, serviceOrHandler) =>
    base.register(['PATCH'], path, serviceOrHandler),
  delete: (base) => (path, serviceOrHandler) =>
    base.register(['DELETE'], path, serviceOrHandler),
};
