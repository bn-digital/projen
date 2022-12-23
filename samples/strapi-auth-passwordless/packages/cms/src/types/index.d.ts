declare namespace App {
  namespace Graphql {
    import { Context } from "koa";

    declare interface ResolverContext {
      koaContext: Context;
      state: {
        user: Strapi.UsersPermissions.UserEntity;
      };
      badRequest: (message: string) => any;
    }
  }
}
