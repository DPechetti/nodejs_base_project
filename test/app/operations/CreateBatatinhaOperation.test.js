const CreateBatatinhaOperation = require('../../../src/app/operations/CreateBatatinhaOperation');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('CreateBatatinhaOperation', () => {
  test('Should call batatinha service and return created batatinha', async () => {
    const batatinha = generateBatatinhaRequest();
    const batatinhaServiceResponse = { batatinhaResponseField: 'batatinhaResponseField' };

    const createBatatinhaService = {
      execute: () => Promise.resolve(batatinhaServiceResponse)
    };
    const createBatatinhaOperation = CreateBatatinhaOperation({ createBatatinhaService });

    const createdBatatinha = await createBatatinhaOperation.execute(batatinha);

    expect(createdBatatinha).toStrictEqual(batatinhaServiceResponse);
  });
});
