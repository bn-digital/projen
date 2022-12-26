/// <reference types="./src/types" />

import { cdk, javascript } from "projen";

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
  releaseBranches: { latest: { majorVersion: 1 } },
  release: false,
  buildWorkflow: true,
  releaseToNpm: true,
  repositoryUrl: "https://github.com/bn-digital/projen.git",
  tsconfigDev: {
    compilerOptions: {
      baseUrl: ".",
      rootDir: ".",
      moduleResolution: javascript.TypeScriptModuleResolution.NODE,
      allowSyntheticDefaultImports: true,
      paths: { "@bn-digital/projen/*": ["./src/*"] },
      lib: ["es2020", "DOM"],
    },
  },
});
project.packageTask.reset("npx projen package-all");
project.synth();
