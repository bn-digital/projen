import { cdk, javascript } from "projen";

const project = new cdk.JsiiProject({
  name: "projen",
  devDeps: ["projen@0.65.50", "@bn-digital/prettier-config"],
  peerDeps: ["projen@0.65.50"],
  description: "Set of tools for building projects in bndigital",
  author: "bndigital",
  authorAddress: "dev@bndigital.co",
  authorOrganization: true,
  defaultReleaseBranch: "latest",
  eslint: false,
  mutableBuild: false,
  pullRequestTemplate: false,
  tsconfig: { compilerOptions: { resolveJsonModule: true } },
  githubOptions: { mergify: false, pullRequestLint: false, workflows: false },
  jest: false,
  release: false,
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageName: "@bn-digital/projen",
  prettier: false,
  projenrcTs: true,
  repositoryUrl: "https://github.com/bn-digital/projen.git",
});
project.package.addField("prettier", "@bn-digital/prettier-config");
project.synth();
