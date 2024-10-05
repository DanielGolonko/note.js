const fs = require("fs").promises;
const path = require("path");

const list = async () => {
  const folderPath = path.join(__dirname, "files");

  try {
    const floderExists = await fs.stat(folderPath).catch(() => null);
    if (!folderExists) {
      throw new Error("FS operation failed");
    }

    const files = await fs.readir(folderPath);

    console.log(files);
  } catch (err) {
    console.log(err.message);
  }
};

await list();
