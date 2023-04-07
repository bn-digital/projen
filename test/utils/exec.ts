import { exec } from "child_process"

export function execProjenCLI(workdir: string, args: string[] = []) {
  const command = [process.execPath, "projen", ...args]

  return exec(command.map(x => `"${x}"`).join(" "), { cwd: workdir })
}
