import { typescript } from "projen";

export namespace strapi {
  type DatabaseProvider = "sqlite" | "postgres" | "mysql";
  type EmailProvider = "nodemailer" | "mailgun" | "sendgrid";
  interface StrapiOptions {
    version: string;
    dbProvider: DatabaseProvider[] | DatabaseProvider;
    mailProvider: EmailProvider[] | EmailProvider;
  }
  interface ProjectOptions extends typescript.TypeScriptProjectOptions {
    strapi: StrapiOptions;
  }
  class Project extends typescript.TypeScriptProject {
    constructor(options: ProjectOptions);
  }
}
