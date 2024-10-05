import { Worker } from "worker_threads";
import os from "os";

const performCalculations = () => {
  const numCPUs = os.cpus().length;
  const results = new Array(numCPUs);

  const runWorker = (index, n) => {
    return new Promise((resolve) => {
      const worker = new Worker("./worker.js");

      worker.postMessage(n);

      worker.on("message", (result) => {
        results[index] = { status: "resolved", data: result };
        resolve();
      });

      worker.on("error", () => {
        results[index] = { status: "error", data: null };
        resolve();
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          results[index] = { status: "error", data: null };
          resolve();
        }
      });
    });
  };

  const promises = [];
  for (let i = 0; i < numCPUs; i++) {
    promises.push(runWorker(i, 10 + i));
  }

  Promise.all(promises).then(() => {
    console.log("Results:", results);
  });
};

performCalculations();
