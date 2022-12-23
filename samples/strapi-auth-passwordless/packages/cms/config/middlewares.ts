import { Middleware } from "koa";
import { VoidFunctionComponent } from "react";

type MiddlewareUIDs =
  | `strapi::${string}`
  | `global::${string}`
  | `api::${string}`
  | `plugin::${string}`;

type MiddlewareType<
  UID extends string = string,
  T extends Record<string, any> = Record<string, any>
> = MiddlewareUIDs | { name: UID; config?: T; resolve?: string } | Middleware;
export default ({ env }: Strapi.Env): MiddlewareType[] => {
  return [
    "strapi::errors",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          dangerouslyDisableDefaultSrc: true,
        },
      },
    },

    {
      name: "strapi::cors",
      config: {
        credentials: true,
      },
    },
    "plugin::users-permissions.jwtCookieGetter",
    "strapi::query",
    "strapi::body",
    "strapi::favicon",
    "strapi::public",
  ];
};
