const DeleteBatatinhaService = require('../../../src/app/services/DeleteBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('DeleteBatatinhaService', () => {
  test('Should call batatinha repository', async () => {
    const batatinha = generateBatatinhaRequest();
    const { batatinha_header, batatinha_id } = batatinha;

    const batatinhaRepository = {
      delete: () => Promise.resolve()
    };

    const deleteBatatinhaService = DeleteBatatinhaService({ batatinhaRepository });

    const deletedBatatinha = await deleteBatatinhaService.execute({ batatinha_header, batatinha_id });

    expect(deletedBatatinha).toStrictEqual(undefined);
  });
});
