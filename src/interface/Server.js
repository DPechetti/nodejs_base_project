const express = require('express');
const helmet = require('helmet');
const nocache = require('nocache');

const { scopePerRequest } = require('awilix-express');

let server;

module.exports = ({ environment, router, logger, container }) => ({
  createServer: () => {
    server = express();
    server.use(helmet());
    server.use(nocache());
    server.use(scopePerRequest(container));
    server.use(router);
  },

  start: async () => {
    const { port } = environment;

    server.listen(port, () => {
      logger.info(`Listening at port ${port}`);
    });
  }
});
