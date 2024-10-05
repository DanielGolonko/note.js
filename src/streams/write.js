import fs from "fs";

const write = async () => {
  const filePath = "./fileToWrite.txt";

  const writeStream = fs.createWriteStream(filePath, { encoding: "utf8" });

  writeStream.on(finish, () => {
    console.log("Finished writing file");
  });

  writeStream.on("error", (err) => {
    console.error("FS operation failed:", err.message);
  });

  console.log("Writing file");

  ProcessingInstruction.stdin.pipe(writeStream);
};

await write();
