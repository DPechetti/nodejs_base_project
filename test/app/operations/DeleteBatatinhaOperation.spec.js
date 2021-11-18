const DeleteBatatinhaOperation = require('../../../src/app/operations/DeleteBatatinhaOperation');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('DeleteBatatinhaOperation', () => {
  test('Should call batatinha service and return found batatinha', async () => {
    const batatinha = generateBatatinhaRequest();

    const deleteBatatinhaService = {
      execute: () => Promise.resolve()
    };
    const deleteBatatinhaOperation = DeleteBatatinhaOperation({ deleteBatatinhaService });

    const deletedBatatinha = await deleteBatatinhaOperation.execute(batatinha);

    expect(deletedBatatinha).toStrictEqual(undefined);
  });
});
