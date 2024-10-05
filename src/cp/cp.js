import { spawn } from "child_process";

export const spawnChildProcess = (args) => {
  const child = spawn("node", ["./script.js", ...args], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.stderr.on("data", (data) => {
    console.error(`Child error: ${data}`);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

const args = process.argv.slice(2);
spawnChildProcess(args);
