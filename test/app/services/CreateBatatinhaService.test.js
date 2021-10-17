const CreateBatatinhaService = require('../../../src/app/services/CreateBatatinhaService');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('CreateBatatinhaService', () => {
  test('Should call batatinha domain, call batatinha repository and return created batatinha', async () => {
    const batatinha = generateBatatinhaRequest();

    const batatinhaRepository = {
      create: () => Promise.resolve(batatinha)
    };

    const createBatatinhaOperation = CreateBatatinhaService({ batatinhaRepository });

    const createdBatatinha = await createBatatinhaOperation.execute(batatinha);

    expect(createdBatatinha).toStrictEqual(batatinha);
  });
});
