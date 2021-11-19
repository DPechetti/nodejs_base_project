module.exports = ({ batatinhaRepository }) => ({
  execute: async ({ batatinha_header, batatinha_id }) => {
    return batatinhaRepository.delete({ batatinha_header, batatinha_id });
  }
});
