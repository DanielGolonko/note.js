const fs = require("fs").promises;
const path = require("path");

const rename = async () => {
  const oldPath = path.join(__dirname, "wrongFilename.txt");
  const newPath = path.join(__dirname, "properFilename.md");

  try {
    const oldFileExists = await fs.stat(oldPath).catch(() => null);
    if (!oldFileExists) {
      throw new Error("FS operation failed");
    }

    const newFileExists = await fs.stat(newPath).catch(() => null);
    if (newFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.rename(oldPath, newPath);
    console.log("File renamed successfully.");
  } catch (err) {
    console.error(err.message);
  }
};

await rename();
