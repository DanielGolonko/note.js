const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = {};

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const value = args[i + 1];

    result[propName] = value;
  }

  for (const [key, value] of Object.entries(results)) {
    console.log(`${key} is ${value}`);
  }
};

parseArgs();
