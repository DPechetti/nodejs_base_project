const ListBatatinhaOperation = require('../../../src/app/operations/ListBatatinhaOperation');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('GetBatatinhaOperation', () => {
  test('Should call batatinha service and return found batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const batatinhaServiceResponse = { batatinhaResponseField: 'batatinhaResponseField' };

    const listBatatinhaService = {
      execute: () => Promise.resolve([batatinhaServiceResponse, batatinhaServiceResponse])
    };
    const listBatatinhaOperation = ListBatatinhaOperation({ listBatatinhaService });

    const foundBatatinha = await listBatatinhaOperation.execute(batatinha);

    expect(foundBatatinha).toStrictEqual([batatinhaServiceResponse, batatinhaServiceResponse]);
  });
});
