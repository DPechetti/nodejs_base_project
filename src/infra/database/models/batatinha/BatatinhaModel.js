const Model = require('../');
const batatinhaSchema = require('./BatatinhaSchema');

module.exports = class BatatinhaModel extends Model {
  constructor({ providerConnection, environment, logger }) {
    const schema = batatinhaSchema(providerConnection, environment);
    const indexes = [
      { fields: { batatinha_id: 1 }, unique: { unique: true } },
      { fields: { batatinha_header: 1 }, unique: { unique: false } }
    ];

    super({
      providerConnection,
      logger,
      collectionName: environment.db.collections.batatinha.name,
      schema,
      indexes
    });
  }
};
