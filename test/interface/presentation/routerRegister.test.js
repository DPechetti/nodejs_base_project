const RouterRegister = require('../../../src/interface/presentation/routerRegister');

describe('routerRegister', () => {
  describe('#execute', () => {
    test('Should call routes', () => {
      const validatorMiddleware = {
        validateContract: jest.fn(() => () => true)
      };
      const routes = [
        {
          httpMethod: 'get',
          routePath: 'any_routePath',
          schemaValidation: 'any_schemaValidation',
          handler: () => true
        }
      ];

      const routerRegister = RouterRegister({ validatorMiddleware });
      routerRegister.execute(routes);

      expect(validatorMiddleware.validateContract).toHaveBeenCalledTimes(1);
      expect(validatorMiddleware.validateContract).toHaveBeenCalledWith(routes[0].schemaValidation);
    });
  });
});
