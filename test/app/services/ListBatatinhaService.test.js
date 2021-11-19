const ListBatatinhaService = require('../../../src/app/services/ListBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('ListBatatinhaService', () => {
  test('Should find batatinha, call batatinha repository and return batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;

    const batatinhaRepository = {
      list: () => Promise.resolve(batatinha)
    };

    const listBatatinhaService = ListBatatinhaService({ batatinhaRepository });

    const foundBatatinha = await listBatatinhaService.execute({ batatinha_header, batatinha_id });

    expect(foundBatatinha).toEqual(batatinha);
  });

  test('Should return batatinha not found', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;
    const batatinhaRepository = {
      list: () => Promise.resolve(null)
    };

    const listBatatinhaService = ListBatatinhaService({ batatinhaRepository });
    try {
      await listBatatinhaService.execute({ batatinha_header, batatinha_id });
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
      expect(error.details[0].error_message).toStrictEqual('Batatinha was not found with header and id informed');
    }
  });
});
