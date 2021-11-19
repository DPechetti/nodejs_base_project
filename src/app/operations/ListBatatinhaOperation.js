module.exports = ({ listBatatinhaService }) => ({
  execute: async batatinha => await listBatatinhaService.execute(batatinha)
});
