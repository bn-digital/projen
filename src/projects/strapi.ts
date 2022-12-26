import { typescript } from "projen";

/**
 * @pjid strapi
 */
export class StrapiProject extends typescript.TypeScriptProject {
  constructor({ strapi, ...options }: strapi.ProjectOptions) {
    super({
      strapi,
      ...options,
    });

    this.addDeps(
      `@strapi/strapi@${strapi.version}`,
      `@strapi/database@${strapi.version}`,
      `@strapi/plugin-graphql@${strapi.version}`,
      `@strapi/plugin-content-manager@${strapi.version}`,
      `@strapi/plugin-content-type-builder@${strapi.version}`
    );
    switch (strapi.dbProvider) {
      case "sqlite":
      default:
        options.deps?.push("better-sqlite3");
        break;
      case "postgres":
        options.deps?.push("pg");
        break;
      case "mysql":
        options.deps?.push("mysql");
        break;
    }
    switch (strapi.mailProvider) {
      case "mailgun":
      case "nodemailer":
      case "sendgrid":
        options.deps?.push(
          `@strapi/provider-email-${strapi.mailProvider}@${strapi.version}`
        );
        break;
      default:
        break;
    }
    this.addDevDeps(`typescript`, `@types/node`);
  }
}
