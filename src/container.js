const { createContainer, InjectionMode, asFunction, asValue } = require('awilix');

const server = require('./interface/Server');
const router = require('./interface/Router');
const logger = require('./infra/logging/logger');

const errorSerializer = require('./shared/ErrorSerializer');
const errorMiddleware = require('./interface/middlewares/ErrorMiddleware');

const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

module.exports = {
  configureContainer: environment => {
    container.register({
      logger: asValue(logger),
      router: asFunction(router),
      container: asValue(container),
      environment: asValue(environment),
      server: asFunction(server).singleton(),
      errorSerializer: asValue(errorSerializer),
      errorMiddleware: asFunction(errorMiddleware)
    });

    return container;
  }
};
