const Batatinha = require('../../domain/batatinha/Batatinha');
const { NotFoundException } = require('../../infra/exception');

module.exports = ({ batatinhaRepository }) => ({
  execute: async (updateBatatinhaRequest) => {
    const batatinha = new Batatinha(updateBatatinhaRequest);

    const { batatinha_header, batatinha_id, ...batatinhaFields } = batatinha;

    const updatedBatatinha = await batatinhaRepository.update({ batatinha_header, batatinha_id }, batatinhaFields);

    if (!updatedBatatinha)
      throw new NotFoundException({
        details: [
          {
            error_code: 'Batatinha not found',
            error_message: 'Batatinha was not found with header and id informed'
          }
        ]
      });

    return updatedBatatinha;
  }
});
