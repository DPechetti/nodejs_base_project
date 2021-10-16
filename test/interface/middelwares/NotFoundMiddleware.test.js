const NotFoundMiddleware = require('../../../src/interface/middlewares/NotFoundMiddleware')();
const { NotFoundException } = require('../../../src/infra/exception');
jest.mock('../../../src/infra/exception/NotFoundException');

describe('NotFoundMiddleware', () => {
  test('Should return a serialized error', () => {
    try {
      NotFoundMiddleware();
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(NotFoundException).toHaveBeenCalledTimes(1);
    }
  });
});
