const Repository = require('../Repository');
const batatinhaMapper = require('./BatatinhaMapper');

module.exports = class BatatinhaRepository extends Repository {
  constructor({ batatinhaModel }) {
    super({
      repositoryModel: batatinhaModel,
      repositoryMapper: batatinhaMapper
    });
  }
};
