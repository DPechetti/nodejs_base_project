const Repository = require('../../../../src/infra/database/repository');
const { OperationException } = require('../../../../src/infra/exception');
const generateBatatinhaRequest = require('../../../mocks/batatinha/generateBatatinhaRequest');

describe('Repository', () => {
  describe('#create', () => {
    test('Should return a created batatinha', async () => {
      const batatinha = generateBatatinhaRequest();
      const repositoryModel = () => ({
        save: () => Promise.resolve(batatinha)
      });
      const repositoryMapper = {
        toDatabase: jest.fn(data => data),
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const createdBatatinha = await repository.create(batatinha);

      expect(createdBatatinha).toEqual(batatinha);

      expect(repositoryMapper.toDatabase).toHaveBeenCalledTimes(1);
      expect(repositoryMapper.toDatabase).toHaveBeenCalledWith(batatinha);
      expect(repositoryMapper.toResponse).toHaveBeenCalledTimes(1);
      expect(repositoryMapper.toResponse).toHaveBeenCalledWith(batatinha);
    });

    test('Should return operation exception when model.save throw error', async () => {
      const batatinha = generateBatatinhaRequest();
      const repositoryModel = () => ({
        save: () => Promise.reject(new Error('any_error'))
      });
      const repositoryMapper = {
        toDatabase: jest.fn(data => data),
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      try {
        await repository.create(batatinha);
      } catch (error) {
        expect(error).toBeInstanceOf(OperationException);

        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('any_error');
        expect(error.stack).toContain('Error: any_error');

        expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
        expect(repositoryMapper.toDatabase).toHaveBeenCalledTimes(1);
        expect(repositoryMapper.toDatabase).toHaveBeenCalledWith(batatinha);
      }
    });
  });
});
