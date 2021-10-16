const batatinhaDomain = require('../../domain/batatinha/Batatinha');

module.exports = ({ batatinhaRepository }) => ({
  execute: async ({ batatinha_header, batatinha_id }) => {
    const foundBatatinha = await batatinhaRepository.get({ batatinha_header, batatinha_id });

    const batatinha = new batatinhaDomain(foundBatatinha);

    return batatinha;
  }
});
