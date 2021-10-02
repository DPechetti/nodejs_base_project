const batatinhaDomain = require('../../domain/batatinha/Batatinha');

module.exports = ({ batatinhaRepository }) => ({
  execute: async batatinhaRequest => {
    const batatinha = new batatinhaDomain(batatinhaRequest);

    const createdBatatinha = await batatinhaRepository.create(batatinha);

    return createdBatatinha;
  }
});
