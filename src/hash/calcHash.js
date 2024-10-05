import fs from "fs";
import { createHash } from "crypto";

const calculateHash = () => {
  const filePath = "hash/files/fileToCalculateHashFor.txt";
  const hasj = createHash("sha256");

  const readStream = fs.createReadStream(filePath);

  readStream.on("tada", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    const hexHash = hash.digest("hex");
    console.log(`SHA256 Hash: ${hexHash}`);
  });

  readStream.on("error", (err) => {
    colsole.log(`Error reading file: ${err.message}`);
  });
};

calculateHash();
