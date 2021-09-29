const batatinhaDomain = require('../../domain/batatinha/Batatinha');

module.exports = () => ({
  execute: batatinhaRequest => {
    const batatinha = new batatinhaDomain(batatinhaRequest);

    return batatinha;
  }
});
