import { DependencyType }               from "projen";
import { FullStackProject }             from "../../src";
import { execProjenCLI, synthSnapshot } from "../utils";


describe("FullStack project with default settings", () => {
  function synthProject() {
    return new FullStackProject({
      name: "test",
    });

  }

  it("synthesizes", () => {
    const project = synthProject();
    project.synth()
    expect(project.tasks.tryFind("yarn")).toBeDefined();
    expect(project.yarn).toBeDefined();
    expect(project.docker).toBeDefined();
    expect(project.deps.tryGetDependency("@bn-digital/eslint-config")).toBeDefined();
    expect(project.deps.tryGetDependency("@bn-digital/prettier-config")).toBeDefined();

    expect(project.backend).toBeDefined();
    expect(project.backend?.yarn).not.toBeDefined();
    expect(project.backend?.linters).not.toBeDefined();
    expect(project.backend?.docker).not.toBeDefined();
    expect(project.backend?.ide).not.toBeDefined();
    expect(project.backend?.graphql).not.toBeDefined();
    expect(project.backend?.deps.tryGetDependency("better-sqlite3")).toBeDefined();
    expect(project.backend?.packageName).toStrictEqual("@test/backend");
    expect(project.backend?.deps.getDependency("@strapi/strapi", DependencyType.RUNTIME)?.version).toStrictEqual("^4.9.0");

    expect(project.frontend).toBeDefined();
    expect(project.frontend?.packageName).toStrictEqual("@test/frontend");
    expect(project.frontend?.yarn).not.toBeDefined();
    expect(project.frontend?.docker).not.toBeDefined();
    expect(project.frontend?.ide).not.toBeDefined();
    expect(project.frontend?.graphql).toBeDefined();
    expect(project.frontend?.linters).not.toBeDefined();
    expect(project.frontend?.deps.getDependency("react", DependencyType.RUNTIME)?.version).toStrictEqual("^18.2.0");
    expect(project.frontend?.deps.getDependency("react-dom", DependencyType.RUNTIME)?.version).toStrictEqual("^18.2.0");
    const output = synthSnapshot(project);
    expect(output).toMatchSnapshot();

  });

  it("compiles", () => {
    const project = synthProject();
    project.synth()

    execProjenCLI(project.outdir, ["compile"]);

  });

  it("installs", () => {
    const project = synthProject();
    project.synth()

    execProjenCLI(project.outdir, ["install"]);

  });
  it("builds", () => {
    const project = synthProject();
    project.synth()

    execProjenCLI(project.outdir, ["build"]);

  });
  it("lint", () => {
    const project = synthProject();
    project.synth()

    execProjenCLI(project.outdir, ["lint"]);
  });
});
