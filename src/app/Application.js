const { loadEnvironment } = require('../../config/LoadConfigs');
const { configureContainer } = require('../container');

let container;

module.exports = {
  loadSetup: async () => {
    const config = await loadEnvironment();

    container = configureContainer(config);

    const { providerConnection } = container.cradle;
    await providerConnection.connect();

    return;
  },

  start: async () => {
    const { server } = container.cradle;

    await server.createServer();
    await server.start();
  }
};
