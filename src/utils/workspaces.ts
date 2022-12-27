import { typescript } from "projen";

export function resolvePackageName(
  options: Pick<
    typescript.TypeScriptProjectOptions,
    "name" | "packageName" | "parent"
  >
): string {
  return (
    options.packageName ??
    (options?.parent ? `@${options.name}/cms` : options.name)
  );
}

export function resolveOutDir(
  options: Pick<
    typescript.TypeScriptProjectOptions,
    "outdir" | "parent" | "name"
  >
): string {
  return (
    options.outdir ??
    (options?.parent ? `packages/${options.name}` : options.name)
  );
}
