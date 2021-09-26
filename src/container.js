const { createContainer, InjectionMode, asFunction, asValue } = require('awilix');

const server = require('./interface/Server');
const router = require('./interface/Router');
const logger = require('./infra/logging/logger');

const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

module.exports = {
  configureContainer: environment => {
    container.register({
      server: asFunction(server).singleton(),
      router: asFunction(router),
      logger: asValue(logger),
      environment: asValue(environment),
      container: asValue(container),
    });

    return container;
  }
};
