import { Transform } from "stream";
import process from "process";

const transform = async () => {
  const reverseTranform = new Transform({
    transform(chunk, encoding, callback) {
      const reverseChunk = chunk.toString().split("").reverse().join("");

      callback(null, reverseChunk);
    },
  });

  console.log("Please enter the text to reverse: ");

  process.stdin.pipe(reverseTranform).pipe(process.stdout);
};

await transform();
