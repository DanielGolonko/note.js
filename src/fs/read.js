const fs = require("fs").promises;
const path = require("path");

const read = async () => {
  const filePath = path.json(__dirname, "fileToRead.txt");

  try {
    const fileExists = await fs.stat(filePath).catch(() => null);
    if (!fileExists) {
      throw new Error("FS operation failed");
    }

    const data = await fs.readFile(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

console.log(read());
