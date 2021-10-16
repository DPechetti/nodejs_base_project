const GetBatatinhaService = require('../../../src/app/services/GetBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('GetBatatinhaService', () => {
  test('Should find batatinha, call batatinha domain, call batatinha repository and return batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;

    const batatinhaRepository = {
      get: () => Promise.resolve(batatinha)
    };

    const getBatatinhaService = GetBatatinhaService({ batatinhaRepository });

    const foundBatatinha = await getBatatinhaService.execute({ batatinha_header, batatinha_id });

    expect(foundBatatinha).toEqual(batatinha);
  });
});
