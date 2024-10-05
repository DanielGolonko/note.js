const fs = require("fs").promises;
const path = require("path");

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const content = "I am fresh and young";

  try {
    try {
      await fs.access(filePath);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }

    await fs.writeFile(filePath, content, "utf8");
    console.log("File created successfully!");
  } catch (err) {
    console.error(err.message);
  }
};

await create();
