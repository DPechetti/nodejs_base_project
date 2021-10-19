module.exports = ({ updateBatatinhaService }) => ({
  execute: async batatinha => await updateBatatinhaService.execute(batatinha)
});
