const fs = require("fs").promises;
const path = require("path");

const copy = async () => {
  const source = path.join(__dirname, "files");
  const destination = path.join(__dirname, "files_copy");

  try {
    const filesExists = await fs.stat(source).catch(() => null);
    if (!filesExists) {
      throw new Error("FS operation failed");
    }

    const filesCopyExists = await fs.stat(destination).catch(() => null);
    if (filesCopyExists) {
      throw new Error("FS operation failed");
    }

    await fs.mkdir(destination);

    const items = await fs.readdir(source, { withFileTypes: true });

    for (let item of items) {
      const sourcePath = path.join(source, item.name);
      const destinationPath = path.join(destination, item.name);

      if (item.isDirectory()) {
        await copyDirectory(sourcePath, destinationPath);
      } else {
        await fs.copyFile(sourcePath, destinationPath);
      }
    }

    console.log("succesfully copied files");
  } catch (err) {
    console.error(err.message);
  }
};

const copyDirectory = async (sourceDir, destDir) => {
  await fs.mkdir(destDir);

  const items = await fs.readdir(sourceDir, { withFileTypes: true });

  for (let item of items) {
    const sourcePath = path.join(sourceDir, item.name);
    const destinationPath = path.join(destDir, item.name);

    if (item.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath);
    } else {
      await fs.copyFile(sourcePath, destinationPath);
    }
  }
};

await copy();
