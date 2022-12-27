namespace strapi {
  import { javascript, typescript } from "projen";

  type DatabaseProvider = "sqlite" | "postgres" | "mysql";
  type EmailProvider = "nodemailer" | "mailgun" | "sendgrid";

  type ProjectOptions = Omit<
    typescript.TypeScriptProjectOptions,
    "defaultReleaseBranch"
  > & {
    name: string;
    strapiOptions: strapi.Options;
  };

  interface Options {
    version?: string;
    users?: { enabled: boolean };
    graphql?: {
      enabled: boolean;
      config?: {};
    };
    database?: {
      client: DatabaseProvider;
      config?: {};
    };
    email?: {
      provider: EmailProvider;
    };
  }
}
