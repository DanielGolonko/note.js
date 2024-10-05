import path from "path";
import { release, version } from "os";
import { createServer } from "http";
import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };

const random = Math.random();

const unknownObject = random > 0.5 ? a : b;

console.log(`Release: ${release()}`);
console.log(`Version: ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const PORT = 3000;

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
