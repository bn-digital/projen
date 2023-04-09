import { javascript } from "projen"
import { Template } from "./src"

const ORGANIZATION = "bn-digital" as const
const PROJECT = "projen" as const

const project = new Template({
  author: ORGANIZATION,
  authorAddress: `https://github.com/${ORGANIZATION}`,
  name: PROJECT,
  docgenFilePath: "docs/API.md",
  gitignore: ["test-reports", "coverage", "build", "__snapshots__"],
  devDeps: ["jest", "ts-jest", "jest-snapshot", "@types/jest"],
  codeCov: false,
  eslint: true,
  stylelint: false,
  prettier: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.YARN2,
  defaultReleaseBranch: "latest",
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
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
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
project.addPackageIgnore(".mergify.yml")
project.addPackageIgnore("/build")
project.addPackageIgnore("/test-reports")
project.addPackageIgnore("/test")
project.addPackageIgnore("/coverage")
project.addPackageIgnore("/packages")
project.synth()

// Projects.createProject({ dir: 'test', projectFqn: '@bn-digital/projen.FullStackProject', projectOptions: {} })
