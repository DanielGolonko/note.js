const fs = require("fs").promises;
const path = require("path");

const remove = async () => {
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    const fileExists = await fs.stat(filePath).catch(() => null);
    if (!fileExists) {
      throw new Error("FS operation failed");
    }

    await fs.unlink(filePath);
    console.log("File deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
};

await remove();
