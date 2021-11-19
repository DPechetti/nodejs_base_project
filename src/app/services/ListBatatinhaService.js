module.exports = ({ batatinhaRepository }) => ({
  execute: async ({ batatinha_header, page = 1, limit = 10 }) => {
    const foundBatatinhas = await batatinhaRepository.list({ batatinha_header }, { page: Number(page), limit: Number(limit) });

    return foundBatatinhas;
  }
});
