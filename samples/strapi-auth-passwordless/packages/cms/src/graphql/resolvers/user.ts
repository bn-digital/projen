import { FieldResolver } from "nexus";
import _ from "lodash";

const me: FieldResolver<"Query", "me"> = async (root, args: null) => {
  const ctx: App.Graphql.ResolverContext = (strapi as any).requestContext.get();
  const userService: Strapi.UsersPermissions.UserService = strapi
    .plugin("users-permissions")
    .service("user");
  const user = await userService.fetch(ctx.state.user.id, { populate: "*" });
  if (!user) return null;

  return {
    id: ctx.state.user.id,
    ...user,
  };
};

const loginByPasswordless = async (
  root,
  { input: { loginToken } }: { input: { loginToken: string } },
  ctx: App.Graphql.ResolverContext
) => {
  console.log(loginToken);
  const passwordlessController = strapi
    .plugin("passwordless")
    .controller("auth");
  const { passwordless } = strapi.plugins["passwordless"].services;
  const {
    user: userService,
    jwt: jwtService,
  }: {
    user: Strapi.UsersPermissions.UserService;
    jwt: { issue({ id }: { id: string }): string };
  } = strapi.plugins["users-permissions"].services;
  const isEnabled = await passwordless.isEnabled();

  if (!isEnabled) {
    return ctx.koaContext.throw(400, "plugin.disabled");
  }

  if (_.isEmpty(loginToken)) {
    return ctx.koaContext.throw(400, "token.empty");
  }
  const token = await passwordless.fetchToken(loginToken);

  if (!token) {
    return ctx.koaContext.throw(400, "token.invalid");
  }

  await passwordless.updateTokenOnLogin(token);

  const user = await strapi.query("plugin::users-permissions.user").findOne({
    where: { email: token.email },
  });

  if (!user) {
    return ctx.koaContext.throw(400, "wrong.email");
  }

  if (user.blocked) {
    return ctx.koaContext.throw(400, "blocked.user");
  }
  ctx.koaContext.cookies.set("jwt", jwtService.issue({ id: user.id }), {
    signed: true,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  return jwtService.issue({ id: user.id });
};

export { loginByPasswordless, me };
