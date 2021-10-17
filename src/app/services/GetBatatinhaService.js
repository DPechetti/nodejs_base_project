const { NotFoundException } = require('../../infra/exception');
const batatinhaDomain = require('../../domain/batatinha/Batatinha');

module.exports = ({ batatinhaRepository }) => ({
  execute: async ({ batatinha_header, batatinha_id }) => {
    const foundBatatinha = await batatinhaRepository.get({ batatinha_header, batatinha_id });

    if (!foundBatatinha)
      throw new NotFoundException({
        details: [
          {
            error_code: 'Batatinha not found',
            error_message: 'Batatinha was not found with header informed'
          }
        ]
      });

    const batatinha = new batatinhaDomain(foundBatatinha);

    return batatinha;
  }
});
