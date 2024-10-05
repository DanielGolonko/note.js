import fs from "fs";
import { Readable } from "stream";
const readFileContent = () => {
  const filePath = "./fileToRead.txt";

  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    console.log("\nFinished reading file.");
  });

  readStream.on("error", (err) => {
    console.error("FS operation failed:", err.message);
  });
};

readFileContent();
