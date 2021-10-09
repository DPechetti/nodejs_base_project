const batatinhaMapper = require('../../../../../src/infra/database/repository/batatinha/BatatinhaMapper');
const generateBatatinhaRequest = require('../../../../mocks/batatinha/generateBatatinhaRequest');

describe('batatinhaMapper', () => {
  describe('#toResponse', () => {
    test('Should return only expected fields', () => {
      const batatinha = generateBatatinhaRequest();

      const response = batatinhaMapper.toResponse({ ...batatinha, any_field: 'any_field' });

      expect(response).toEqual(batatinha);
    });
  });

  describe('#toDatabase', () => {
    test('Should call toDatabase method successfully', () => {
      const batatinha = generateBatatinhaRequest();

      const response = batatinhaMapper.toDatabase(batatinha);

      expect(response).toEqual(batatinha);
    });
  });
});
