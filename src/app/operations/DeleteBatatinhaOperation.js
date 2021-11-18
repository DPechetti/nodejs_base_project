module.exports = ({ deleteBatatinhaService }) => ({
  execute: async batatinha => await deleteBatatinhaService.execute(batatinha)
});
