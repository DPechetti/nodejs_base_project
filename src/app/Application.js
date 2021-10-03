const { loadEnvironment } = require('../../config/LoadConfigs');
const { configureContainer } = require('../container');

let container;

module.exports = {
  loadSetup: async () => {
    const config = await loadEnvironment();

    container = configureContainer(config);

    return;
  },

  start: async () => {
    const { providerConnection, server } = container.cradle;

    await providerConnection.connect();
    await server.createServer();
    await server.start();
  }
};
