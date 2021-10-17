module.exports = ({ getBatatinhaService }) => ({
  execute: async batatinha => await getBatatinhaService.execute(batatinha)
});
