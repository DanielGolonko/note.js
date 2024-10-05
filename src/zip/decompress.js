import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const inputFilePath = "./archive.gz";
  const outputFilePath = "./fileToDecompress.txt";

  try {
    await fs.promises.stat(inputFilePath);
  } catch (error) {
    console.error("FS operation failed:", error.message);
    return;
  }

  const inputStream = fs.createReadStream(inputFilePath);
  const gunzip = zlib.createGunzip();
  const outputStream = fs.createWriteStream(outputFilePath);

  inputStream
    .pipe(gunzip)
    .pipe(outputStream)
    .on("finish", () => {
      console.log(
        `File ${inputFilePath} has been decompressed to ${outputFilePath}`
      );
    })
    .on("error", (error) => {
      console.error("FS operation failed:", error.message);
    });
};

decompress();
