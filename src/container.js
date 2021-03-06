const { createContainer, InjectionMode, asFunction, asValue, asClass } = require('awilix');

const server = require('./interface/Server');
const router = require('./interface/Router');
const logger = require('./infra/logging/logger');

const errorSerializer = require('./domain/exception/ErrorSerializer');
const errorMiddleware = require('./interface/middlewares/ErrorMiddleware');

const notFoundMiddleware = require('./interface/middlewares/NotFoundMiddleware');
const validatorMiddleware = require('./interface/middlewares/ValidatorMiddleware');

const routerRegister = require('./interface/presentation/routerRegister');

const batatinhaRoutes = require('./interface/presentation/batatinha/BatatinhaRoutes');
const batatinhaSchema = require('./interface/presentation/batatinha/BatatinhaSchema');
const batatinhaController = require('./interface/presentation/batatinha/BatatinhaController');
const batatinhaSerializer = require('./interface/presentation/batatinha/BatatinhaSerializer');

const providerConnection = require('./infra/database');

const batatinhaModel = require('./infra/database/models/batatinha/BatatinhaModel');
const batatinhaRepository = require('./infra/database/repository/batatinha/BatatinhaRepository');

const createBatatinhaOperation = require('./app/operations/CreateBatatinhaOperation');
const createBatatinhaService = require('./app/services/CreateBatatinhaService');

const getBatatinhaOperation = require('./app/operations/GetBatatinhaOperation');
const getBatatinhaService = require('./app/services/GetBatatinhaService');

const listBatatinhaOperation = require('./app/operations/ListBatatinhaOperation');
const listBatatinhaService = require('./app/services/ListBatatinhaService');

const updateBatatinhaOperation = require('./app/operations/UpdateBatatinhaOperation');
const updateBatatinhaService = require('./app/services/UpdateBatatinhaService');

const deleteBatatinhaOperation = require('./app/operations/DeleteBatatinhaOperation');
const deleteBatatinhaService = require('./app/services/DeleteBatatinhaService');

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
      errorMiddleware: asFunction(errorMiddleware),
      batatinhaRoutes: asFunction(batatinhaRoutes),
      batatinhaSchema: asFunction(batatinhaSchema),
      batatinhaRepository: asClass(batatinhaRepository),
      notFoundMiddleware: asFunction(notFoundMiddleware),
      batatinhaModel: asClass(batatinhaModel).singleton(),
      validatorMiddleware: asFunction(validatorMiddleware),
      batatinhaController: asFunction(batatinhaController),
      batatinhaSerializer: asFunction(batatinhaSerializer),
      getBatatinhaService: asFunction(getBatatinhaService),
      listBatatinhaService: asFunction(listBatatinhaService),
      routerRegister: asFunction(routerRegister).singleton(),
      getBatatinhaOperation: asFunction(getBatatinhaOperation),
      listBatatinhaOperation: asFunction(listBatatinhaOperation),
      createBatatinhaService: asFunction(createBatatinhaService),
      updateBatatinhaService: asFunction(updateBatatinhaService),
      deleteBatatinhaService: asFunction(deleteBatatinhaService),
      providerConnection: asClass(providerConnection).singleton(),
      createBatatinhaOperation: asFunction(createBatatinhaOperation),
      updateBatatinhaOperation: asFunction(updateBatatinhaOperation),
      deleteBatatinhaOperation: asFunction(deleteBatatinhaOperation)
    });

    return container;
  }
};
