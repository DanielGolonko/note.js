import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
  parentPort.postMessage(result);
};

// Odbieranie danych z głównego wątku
parentPort.on("message", (n) => {
  console.log("Received n from main thread:", n);
  const result = nthFibonacci(n);
  sendResult(result);
});
