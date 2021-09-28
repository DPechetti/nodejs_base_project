const { createContainer, InjectionMode, asFunction, asValue } = require('awilix');

const server = require('./interface/Server');
const router = require('./interface/Router');
const logger = require('./infra/logging/logger');

const errorSerializer = require('./shared/ErrorSerializer');
const errorMiddleware = require('./interface/middlewares/ErrorMiddleware');

const notFoundMiddleware = require('./interface/middlewares/NotFoundMiddleware');
const validatorMiddleware = require('./interface/middlewares/ValidatorMiddleware');

const routerRegister = require('./interface/presentation/routerRegister');

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
      routerRegister: asFunction(routerRegister),
      errorMiddleware: asFunction(errorMiddleware),
      notFoundMiddleware: asFunction(notFoundMiddleware),
      validatorMiddleware: asFunction(validatorMiddleware)
    });

    return container;
  }
};
