const GetBatatinhaOperation = require('../../../src/app/operations/GetBatatinhaOperation');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('GetBatatinhaOperation', () => {
  test('Should call batatinha service and return found batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const batatinhaServiceResponse = { batatinhaResponseField: 'batatinhaResponseField' };

    const getBatatinhaService = {
      execute: () => Promise.resolve(batatinhaServiceResponse)
    };
    const getBatatinhaOperation = GetBatatinhaOperation({ getBatatinhaService });

    const foundBatatinha = await getBatatinhaOperation.execute(batatinha);

    expect(foundBatatinha).toStrictEqual(batatinhaServiceResponse);
  });
});
