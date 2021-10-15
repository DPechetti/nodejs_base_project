const ValidatorMiddleware = require('../../../src/interface/middlewares/ValidatorMiddleware');
const { ContractException } = require('../../../src/infra/exception');
jest.mock('../../../src/infra/exception/ContractException');

describe('ValidatorMiddleware', () => {
  describe('#validateContract', () => {
    let validatorMiddleware, next;
    beforeEach(() => {
      validatorMiddleware = ValidatorMiddleware();
      next = jest.fn(() => { });
    });

    test('Should throw validation error', () => {
      const validation = { name: { validate: () => ({ error: 'any_error' }) } };

      try {
        const error = validatorMiddleware.validateContract(validation)({}, undefined, next);
        expect(error).toBeInstanceOf(ContractException);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(next).toHaveBeenCalledTimes(1);
        expect(ContractException).toHaveBeenCalledTimes(1);
      }
    });

    test('Should call next when not occurs error', () => {
      const validation = { name: { validate: () => ({ value: 'any_value' }) } };

      validatorMiddleware.validateContract(validation)({}, undefined, next);

      expect(next).toHaveBeenCalledTimes(1);
      expect(ContractException).not.toHaveBeenCalled();
    });
  });
});
