'use strict';

const { OperationException } = require('../../exception');

module.exports = class Model {
  constructor({ providerConnection, logger, collectionName, schema, indexes = [] }) {
    this.logger = logger;
    this.collectionName = collectionName;
    this.indexes = indexes;

    this._validateParams();

    const connection = providerConnection.connection;

    indexes.forEach(index => {
      const { fields, unique } = index;

      schema.index(fields, unique);
    });

    return connection.model(collectionName, schema);
  }

  _validateParams() {
    if (!this.collectionName) {
      const errorMessage = 'Missing collection name';
      this.logger.error(errorMessage);
      throw new OperationException(errorMessage);
    }

    if (this.indexes.length === 0) {
      const errorMessage = 'Missing index';
      this.logger.error(errorMessage);
      throw new OperationException(errorMessage);
    }
  }
};
