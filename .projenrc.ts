import { javascript } from "projen"
import { Template } from "./src"

const ORGANIZATION = "bn-digital" as const
const PROJECT = "projen" as const

const project = new Template({
  author: ORGANIZATION,
  authorAddress: `https://github.com/${ORGANIZATION}`,
  defaultReleaseBranch: "latest",
  name: PROJECT,
  readme: { contents: "Projen" },
  docgenFilePath: "docs/API.md",
  gitignore: ["test-reports", "coverage", "build", "__snapshots__"],
  devDeps: ["jest", "jest-unit", "ts-jest", "@types/jest"],
  codeCov: false,
  package: true,
  ide: { editorconfig: true },
  linters: { prettier: true, eslint: true },
  visibility: javascript.NpmAccess.PUBLIC,
  packageName: `@${ORGANIZATION}/${PROJECT}`,
  packageManager: javascript.NodePackageManager.YARN2,
  repositoryUrl: `https://github.com/${ORGANIZATION}/${PROJECT}`,
  sampleCode: false,
})
project.testTask.reset("jest --passWithNoTests --coverageProvider=v8 --updateSnapshot")
project.package.addField("jest", {
  maxWorkers: "25%",
  testMatch: ["**/?(*.)(spec|test).ts?(x)"],
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "clover", "cobertura"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  testPathIgnorePatterns: ["/node_modules/"],
  watchPathIgnorePatterns: ["/node_modules/"],
  reporters: ["default"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.dev.json",
      },
    ],
  },
})
project.addPackageIgnore("*cache")
project.addPackageIgnore(".env*")
project.addPackageIgnore("/build")
project.addPackageIgnore("/test-reports")
project.addPackageIgnore("/coverage")
project.addPackageIgnore("/packages")
project.synth()

// Projects.createProject({ dir: 'test', projectFqn: '@bn-digital/projen.FullStackProject', projectOptions: {} })
