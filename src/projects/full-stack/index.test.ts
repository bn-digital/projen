import { FullStackProject } from "."
import { execProjenCLI, synthSnapshot } from "../../utils"

describe("TypeScriptProject with default settings", () => {
  it("synthesizes", () => {
    const project = new FullStackProject({
      name: "test",
    })

    expect(project.tasks.tryFind("install")).toBeDefined()

    const output = synthSnapshot(project)
    expect(output).toMatchSnapshot()
  })

  it("compiles", () => {
    const project = new FullStackProject({
      name: "test",
    })

    project.synth()

    execProjenCLI(project.outdir, ["compile"])
  })

  it("builds", () => {
    const project = new FullStackProject({
      name: "test",
    })

    project.synth()

    execProjenCLI(project.outdir, ["build"])
  })
})
