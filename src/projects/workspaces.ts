import { bndigital, workspace } from "@bn-digital/projen";

/**
 * @pjid yarn-workspaces
 */
export class YarnWorkspacesProject extends workspace.Project {
  constructor(options: workspace.ProjectOptions) {
    super({
      ...options,
    });
  }

  /**
   * Add a subproject as a workspace
   *
   * @internal
   * @param workspace
   */
  override _addSubProject(workspace: bndigital.Project) {
    const outdir = workspace.outdir;

    if (!outdir && !outdir.startsWith(this.outdir)) {
      throw new Error(
        "A workspace should exist within the outdir of its parent"
      );
    }
    super._addSubProject(workspace);
  }

  override preSynthesize() {
    super.preSynthesize();

    const defaultTask = this.tasks.tryFind("default");
    defaultTask?.prependExec("yarn set version stable");
    this.gitignore.addPatterns(
      ".yarn/*",
      "!.yarn/releases",
      "!.yarn/plugins",
      "!.yarn/sdks",
      "!.yarn/versions",
      ".pnp.*"
    );

    this.package.addField("workspaces", ["packages/*"]);

    const yarnrc = this.tryFindObjectFile(".yarnrc.yml");

    yarnrc?.addOverride("nodeLinker", "node-modules");
    yarnrc?.addOverride("enableGlobalCache", "true");
    yarnrc?.addOverride("preferAggregateCacheInfo", "true");
    yarnrc?.addOverride("nmHoistingLimits", "workspaces");

    defaultTask?.exec("yarn");
  }
}
