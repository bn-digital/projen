namespace strapi {
  import { typescript } from "projen";

  type DatabaseProvider = "sqlite" | "postgres" | "mysql";
  type EmailProvider = "nodemailer" | "mailgun" | "sendgrid";
  interface StrapiOptions {
    version: string;
    dbProvider: DatabaseProvider[] | DatabaseProvider;
    mailProvider: EmailProvider[] | EmailProvider;
  }
  export type ProjectOptions = typescript.TypeScriptProjectOptions & {
    strapi: StrapiOptions;
  };
  class Project extends typescript.TypeScriptProject {
    constructor(options: ProjectOptions);
  }
}
