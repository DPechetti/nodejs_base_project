const UpdateBatatinhaService = require('../../../src/app/services/UpdateBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('UpdateBatatinhaService', () => {
  test('Should update batatinha, call batatinha domain, call batatinha repository and return batatinha', async () => {
    const batatinha = generateBatatinhaRequest();

    const batatinhaRepository = {
      update: () => Promise.resolve(batatinha)
    };

    const updateBatatinhaService = UpdateBatatinhaService({ batatinhaRepository });

    const foundBatatinha = await updateBatatinhaService.execute(batatinha);

    expect(foundBatatinha).toEqual(batatinha);
  });

  test('Should return batatinha not found', async () => {
    const batatinha = generateBatatinhaRequest();

    const batatinhaRepository = {
      update: () => Promise.resolve(null)
    };

    const updateBatatinhaService = UpdateBatatinhaService({ batatinhaRepository });
    try {
      await updateBatatinhaService.execute(batatinha);
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
