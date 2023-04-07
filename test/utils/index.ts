/**
 * @internal
 * @param string
 */
export const slugify = (string: string): string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
export * from "./exec"
export * from "./synth"
