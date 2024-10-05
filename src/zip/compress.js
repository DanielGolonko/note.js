import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const inputFilrPath = "./fileToCompress.txt";
  const outputFilePath = "./archive.gz";

  try {
    await fs.promises.stat(inputFilrPath);
  } catch (error) {
    console.error("FS operation failed:", error.message);
    return;
  }

  const inputStream = fs.createReadStream(inpoutFilePath);
  const gzip = zlib.createGzip();
  const outputStream = fs.createWriteStream(outputFilePath);

  inputStream
    .pipe(gzip)
    .pipe(outputStream)
    .on("finish", () => {
      console.log(
        `File ${inputFilePath} has been compressed to ${outputFilePath}`
      );
    })
    .on("error", (error) => {
      console.error("FS operation failed:", error.message);
    });
};

await compress();
