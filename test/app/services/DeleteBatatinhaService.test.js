const DeleteBatatinhaService = require('../../../src/app/services/DeleteBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('DeleteBatatinhaService', () => {
  test('Should call batatinha repository', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;

    const batatinhaRepository = {
      get: () => Promise.resolve(batatinha),
      delete: () => Promise.resolve()
    };

    const deleteBatatinhaService = DeleteBatatinhaService({ batatinhaRepository });

    const deletedBatatinha = await deleteBatatinhaService.execute({ batatinha_header, batatinha_id });

    expect(deletedBatatinha).toStrictEqual(undefined);
  });

  test('Should return batatinha not found', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;

    const batatinhaRepository = {
      get: () => Promise.resolve(),
      delete: () => Promise.resolve()
    };

    const deleteBatatinhaService = DeleteBatatinhaService({ batatinhaRepository });

    try {
      await deleteBatatinhaService.execute({ batatinha_header, batatinha_id });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);

      expect(error).toHaveProperty('code');
      expect(error.code).toStrictEqual('404');

      expect(error).toHaveProperty('message');
      expect(error.message).toStrictEqual('Not Found');

      expect(error).toHaveProperty('details');
      expect(error.details).toHaveLength(1);

      expect(error.details[0]).toHaveProperty('error_code');
      expect(error.details[0].error_code).toStrictEqual('Batatinha not found');

      expect(error.details[0]).toHaveProperty('error_message');
      expect(error.details[0].error_message).toStrictEqual('The batatinha you want to delete was not found');
    }
  });
});
