const Repository = require('../../../../src/infra/database/repository');
const { OperationException } = require('../../../../src/infra/exception');
const generateBatatinhaRequest = require('../../../mocks/batatinha/generateBatatinhaRequest');

describe('Repository', () => {
  describe('#create', () => {
    test('Should return the created batatinha', async () => {
      const batatinha = generateBatatinhaRequest();
      const repositoryModel = () => ({
        save: () => Promise.resolve(batatinha)
      });
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const createdBatatinha = await repository.create(batatinha);

      expect(createdBatatinha).toEqual(batatinha);

      expect(repositoryMapper.toResponse).toHaveBeenCalledTimes(1);
      expect(repositoryMapper.toResponse).toHaveBeenCalledWith(batatinha);
    });

    test('Should return operation exception when model.save throw error', async () => {
      const batatinha = generateBatatinhaRequest();
      const repositoryModel = () => ({
        save: () => Promise.reject(new Error('any_error'))
      });
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      try {
        await repository.create(batatinha);
      } catch (error) {
        expect(error).toBeInstanceOf(OperationException);

        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('Internal Server Error');

        expect(error).toHaveProperty('details');
        expect(error.details).toHaveLength(1);

        expect(error.details[0]).toHaveProperty('error_code');
        expect(error.details[0].error_code).toStrictEqual('Database error');

        expect(error.details[0]).toHaveProperty('error_message');
        expect(error.details[0].error_message).toStrictEqual('An error occurred saving to database');

        expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
      }
    });
  });

  describe('#list', () => {
    test('Should return the found batatinha', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header } = batatinha;

      const repositoryModel = {
        paginate: () => Promise.resolve({ docs: [batatinha, batatinha] })
      };

      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const foundBatatinha = await repository.list({ batatinha_header });

      expect(foundBatatinha).toEqual({ docs: [batatinha, batatinha] });

      expect(repositoryMapper.toResponse).toHaveBeenCalledTimes(2);
      expect(repositoryMapper.toResponse).toHaveBeenCalledWith(batatinha);
    });

    test('Should return operation exception when paginate throw error', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header } = batatinha;

      const repositoryModel = {
        paginate: () => Promise.reject(new Error('any_error'))
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      try {
        await repository.list({ batatinha_header });
      } catch (error) {
        expect(error).toBeInstanceOf(OperationException);

        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('Internal Server Error');

        expect(error).toHaveProperty('details');
        expect(error.details).toHaveLength(1);

        expect(error.details[0]).toHaveProperty('error_code');
        expect(error.details[0].error_code).toStrictEqual('Database error');

        expect(error.details[0]).toHaveProperty('error_message');
        expect(error.details[0].error_message).toStrictEqual('An error occurred while list batatinhas in the database');

        expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
      }
    });
  });

  describe('#get', () => {
    test('Should return the found batatinha', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id } = batatinha;

      const repositoryModel = {
        findOne: () => Promise.resolve(batatinha)
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const foundBatatinha = await repository.get({ batatinha_header, batatinha_id });

      expect(foundBatatinha).toEqual(batatinha);

      expect(repositoryMapper.toResponse).toHaveBeenCalledTimes(1);
      expect(repositoryMapper.toResponse).toHaveBeenCalledWith(batatinha);
    });

    test('Should return null when not found batatinha', async () => {
      const { batatinha_header, batatinha_id } = generateBatatinhaRequest();

      const repositoryModel = {
        findOne: () => Promise.resolve(null)
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const foundBatatinha = await repository.get({ batatinha_header, batatinha_id });

      expect(foundBatatinha).toEqual(null);

      expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
    });

    test('Should return operation exception when findOne throw error', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id } = batatinha;

      const repositoryModel = {
        findOne: () => Promise.reject(new Error('any_error'))
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      try {
        await repository.get({ batatinha_header, batatinha_id });
      } catch (error) {
        expect(error).toBeInstanceOf(OperationException);

        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('Internal Server Error');

        expect(error).toHaveProperty('details');
        expect(error.details).toHaveLength(1);

        expect(error.details[0]).toHaveProperty('error_code');
        expect(error.details[0].error_code).toStrictEqual('Database error');

        expect(error.details[0]).toHaveProperty('error_message');
        expect(error.details[0].error_message).toStrictEqual('An error occurred while doing a get to the database');

        expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
      }
    });
  });

  describe('#update', () => {
    test('Should return the updated batatinha', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id, ...entity } = batatinha;

      const repositoryModel = {
        findOneAndUpdate: () => Promise.resolve(batatinha)
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const updatedBatatinha = await repository.update({ batatinha_header, batatinha_id }, entity);

      expect(updatedBatatinha).toEqual(batatinha);

      expect(repositoryMapper.toResponse).toHaveBeenCalledTimes(1);
      expect(repositoryMapper.toResponse).toHaveBeenCalledWith(batatinha);
    });

    test('Should return null when not found batatinha', async () => {
      const { batatinha_header, batatinha_id, ...entity } = generateBatatinhaRequest();

      const repositoryModel = {
        findOneAndUpdate: () => Promise.resolve(null)
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      const updatedBatatinha = await repository.update({ batatinha_header, batatinha_id }, entity);

      expect(updatedBatatinha).toEqual(null);

      expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
    });

    test('Should return operation exception when findOneAndUpdate throw error', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id, ...entity } = batatinha;

      const repositoryModel = {
        findOne: () => Promise.reject(new Error('any_error'))
      };
      const repositoryMapper = {
        toResponse: jest.fn(data => data)
      };

      const repository = new Repository({ repositoryModel, repositoryMapper });

      try {
        await repository.update({ batatinha_header, batatinha_id }, entity);
      } catch (error) {
        expect(error).toBeInstanceOf(OperationException);

        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('Internal Server Error');

        expect(error).toHaveProperty('details');
        expect(error.details).toHaveLength(1);

        expect(error.details[0]).toHaveProperty('error_code');
        expect(error.details[0].error_code).toStrictEqual('Database error');

        expect(error.details[0]).toHaveProperty('error_message');
        expect(error.details[0].error_message).toStrictEqual('An error occurred while updating in the database');

        expect(repositoryMapper.toResponse).not.toHaveBeenCalled();
      }
    });
  });

  describe('#delete', () => {
    test('Should return the deleted batatinha', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id } = batatinha;

      const repositoryModel = {
        deleteOne: () => Promise.resolve()
      };

      const repository = new Repository({ repositoryModel });

      const foundBatatinha = await repository.delete({ batatinha_header, batatinha_id });

      expect(foundBatatinha).toStrictEqual(undefined);
    });

    test('Should return operation exception when deleteOne throw error', async () => {
      const batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id } = batatinha;

      const repositoryModel = {
        deleteOne: () => Promise.reject()
      };

      const repository = new Repository({ repositoryModel });

      try {
        await repository.delete({ batatinha_header, batatinha_id });
      } catch (error) {
        expect(error).toBeInstanceOf(OperationException);

        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('Internal Server Error');

        expect(error).toHaveProperty('details');
        expect(error.details).toHaveLength(1);

        expect(error.details[0]).toHaveProperty('error_code');
        expect(error.details[0].error_code).toStrictEqual('Database error');

        expect(error.details[0]).toHaveProperty('error_message');
        expect(error.details[0].error_message).toStrictEqual('An error occurred while delete in the database');
      }
    });
  });
});
