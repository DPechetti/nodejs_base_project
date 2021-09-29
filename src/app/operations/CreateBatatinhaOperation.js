module.exports = ({ createBatatinhaService }) => ({
  execute: async batatinha => await createBatatinhaService.execute(batatinha)
});
