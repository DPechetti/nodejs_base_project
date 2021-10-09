const BatatinhaRepository = require('../../../../../src/infra/database/repository/batatinha/BatatinhaRepository');

describe('BatatinhaRepository', () => {
  describe('#constructor', () => {
    test('Should call constructor successfully', () => {
      const batatinhaModel = {};
      const batatinhaRepository = new BatatinhaRepository({ batatinhaModel });

      expect(batatinhaRepository).toHaveProperty('repositoryModel', {});
      expect(batatinhaRepository).toHaveProperty('repositoryMapper');
      expect(batatinhaRepository.repositoryMapper).toHaveProperty('toDatabase');
      expect(batatinhaRepository.repositoryMapper).toHaveProperty('toResponse');
    });
  });
});
