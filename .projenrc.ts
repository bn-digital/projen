import { cdk, javascript } from "projen";
import { BndigitalProject, StrapiProject } from "./src";

const project = new cdk.JsiiProject({
  author: "bndigital",
  authorAddress: "dev@bndigital.co",
  authorOrganization: true,
  defaultReleaseBranch: "latest",
  description: "Set of tools for building projects in bndigital",
  devDeps: ["projen@0.65.72", "ts-node", "@bn-digital/prettier-config"],
  eslint: false,
  prettier: false,
  jest: false,
  majorVersion: 0,
  name: "projen",
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.PNPM,
  packageName: "@bn-digital/projen",
  peerDeps: ["projen@0.65.72"],
  projenrcTs: true,
  pullRequestTemplate: false,
  depsUpgradeOptions: { workflowOptions: { runsOn: ["self-hosted"] } },
  workflowRunsOn: ["self-hosted"],
  githubOptions: { pullRequestLint: false },
  releaseToNpm: true,
  docgen: false,
  clobber: false,
  repositoryUrl: "https://github.com/bn-digital/projen.git",
  tsconfigDev: {
    include: ["src/**/*.d.ts"],
    compilerOptions: {
      baseUrl: ".",
      noUnusedLocals: false,
      rootDir: ".",
      moduleResolution: javascript.TypeScriptModuleResolution.NODE,
      allowSyntheticDefaultImports: true,
      paths: { "@bn-digital/projen/*": ["./src/*"] },
      lib: ["es2020", "DOM"],
    },
  },
});

const strapiAuthPasswordlessSampleProject = new BndigitalProject({
  name: "sample-strapi-auth-passwordless",
  outdir: "samples/strapi-auth-passwordless",
  parent: project,
  packageName: "strapi-auth-passwordless",
});

const cms = new StrapiProject({
  name: "cms",
  parent: strapiAuthPasswordlessSampleProject,
  strapiOptions: {
    users: { enabled: true },
    email: { provider: "nodemailer" },
    version: "4.5.4",
  },
});
cms.synth();

project.packageTask.reset("npx projen package-all");
project.synth();
