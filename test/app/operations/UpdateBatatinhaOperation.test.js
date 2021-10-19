const UpdateBatatinhaOperation = require('../../../src/app/operations/UpdateBatatinhaOperation');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('UpdateBatatinhaOperation', () => {
  test('Should call batatinha service and return updated batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const batatinhaServiceResponse = { batatinhaResponseField: 'batatinhaResponseField' };

    const updateBatatinhaService = {
      execute: () => Promise.resolve(batatinhaServiceResponse)
    };
    const updateBatatinhaOperation = UpdateBatatinhaOperation({ updateBatatinhaService });

    const updatedBatatinha = await updateBatatinhaOperation.execute(batatinha);

    expect(updatedBatatinha).toStrictEqual(batatinhaServiceResponse);
  });
});
