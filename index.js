const { loadSetup, start } = require('./src/app/Application');

loadSetup()
  .then(() => start())
  .catch((error) => {
    console.error(error);

    process.exit(1);
  });
