const BatatinhaSerializer = require('../../../../src/interface/presentation/batatinha/BatatinhaSerializer');
const generateBatatinhaRequest = require('../../../mocks/batatinha/generateBatatinhaRequest');

describe('BatatinhaSerializer', () => {
  describe('#serialize', () => {
    let batatinha, batatinhaSerializer;

    beforeEach(() => {
      batatinha = generateBatatinhaRequest();

      batatinhaSerializer = BatatinhaSerializer();
    });

    test('Should return the object serialized with only expected data', () => {
      const serializedBatatinha = batatinhaSerializer.serialize({ ...batatinha, any_data: 'any_data' });

      expect(serializedBatatinha).toStrictEqual(batatinha);
    });
  });

  describe('#serializeArray', () => {
    let batatinha, batatinhaSerializer;

    beforeEach(() => {
      batatinha = generateBatatinhaRequest();

      batatinhaSerializer = BatatinhaSerializer();
    });

    test('Should return the object serialized with only expected data', () => {

      const serializedBatatinha = batatinhaSerializer.serializeArray({
        docs: [batatinha, batatinha],
        total: 100,
        limit: 10,
        pages: 10,
        page: 1,
        any_data: 'any_data'
      });

      expect(serializedBatatinha).toStrictEqual({
        batatinhas: [batatinha, batatinha],
        total: 100,
        limit: 10,
        pages: 10,
        page: 1,
      });
    });
  });
});
