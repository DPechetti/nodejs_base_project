const { NotFoundException } = require('../../infra/exception');

module.exports = ({ batatinhaRepository }) => ({
  execute: async ({ batatinha_header, batatinha_id }) => {
    const foundBatatinha = await batatinhaRepository.get({ batatinha_header, batatinha_id });

    if (!foundBatatinha)
      throw new NotFoundException({
        details: [
          {
            error_code: 'Batatinha not found',
            error_message: 'The batatinha you want to delete was not found'
          }
        ]
      });

    return batatinhaRepository.delete({ batatinha_header, batatinha_id });
  }
});
