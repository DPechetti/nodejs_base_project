const GetBatatinhaService = require('../../../src/app/services/GetBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('GetBatatinhaService', () => {
  test('Should find batatinha, call batatinha repository and return batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;

    const batatinhaRepository = {
      get: () => Promise.resolve(batatinha)
    };

    const getBatatinhaService = GetBatatinhaService({ batatinhaRepository });

    const foundBatatinha = await getBatatinhaService.execute({ batatinha_header, batatinha_id });

    expect(foundBatatinha).toEqual(batatinha);
  });

  test('Should return batatinha not found', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;
    const batatinhaRepository = {
      get: () => Promise.resolve(null)
    };

    const getBatatinhaService = GetBatatinhaService({ batatinhaRepository });
    try {
      await getBatatinhaService.execute({ batatinha_header, batatinha_id });
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
