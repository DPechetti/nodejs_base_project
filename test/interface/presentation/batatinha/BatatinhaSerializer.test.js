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
});
