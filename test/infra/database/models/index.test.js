const Model = require('../../../../src/infra/database/models');

describe('Model', () => {
  test('Should validate and return a new generic model with the arguments passed', async () => {
    const logger = { error: jest.fn(data => data) };
    const collectionName = 'collectionName';
    const schema = {
      index: jest.fn((fields, unique) => ({ fields, unique })),
      plugin: jest.fn()
    };
    const providerConnection = {
      connection: {
        model: jest.fn((collectionName, schema) => ({ collectionName, schema }))
      }
    };
    const indexes = [
      { fields: { batatinha_id: 1 }, unique: { unique: true } },
      { fields: { batatinha_header: 1 }, unique: { unique: false } }
    ];

    const modelResponse = new Model({ providerConnection, logger, collectionName, schema, indexes });

    expect(modelResponse).toEqual({ collectionName, schema });

    expect(logger.error).not.toHaveBeenCalled();
    expect(schema.index).toHaveBeenCalledTimes(2);

    expect(providerConnection.connection.model).toHaveBeenCalledTimes(1);
    expect(providerConnection.connection.model).toHaveBeenCalledWith(collectionName, schema);
  });

  test('Should return missing collection name error', async () => {
    const logger = { error: jest.fn(data => data) };
    const collectionName = undefined;
    const schema = {
      index: jest.fn((fields, unique) => ({ fields, unique }))
    };
    const providerConnection = {
      connection: {
        model: jest.fn((collectionName, schema) => ({ collectionName, schema }))
      }
    };
    const indexes = [
      { fields: { batatinha_id: 1 }, unique: { unique: true } },
      { fields: { batatinha_header: 1 }, unique: { unique: false } }
    ];

    try {
      new Model({ providerConnection, logger, collectionName, schema, indexes });
    } catch (error) {

      expect(error).toBeInstanceOf(Error);

      expect(logger.error).toHaveBeenCalled();
      expect(schema.index).not.toHaveBeenCalled();
      expect(providerConnection.connection.model).not.toHaveBeenCalled();
    }
  });

  test('Should return missing index error when index is empty', async () => {
    const logger = { error: jest.fn(data => data) };
    const collectionName = 'collectionName';
    const schema = {
      index: jest.fn((fields, unique) => ({ fields, unique }))
    };
    const providerConnection = {
      connection: {
        model: jest.fn((collectionName, schema) => ({ collectionName, schema }))
      }
    };
    const indexes = [];

    try {
      new Model({ providerConnection, logger, collectionName, schema, indexes });
    } catch (error) {

      expect(error).toBeInstanceOf(Error);

      expect(logger.error).toHaveBeenCalled();
      expect(schema.index).not.toHaveBeenCalled();
      expect(providerConnection.connection.model).not.toHaveBeenCalled();
    }
  });

  test('Should return missing index error when index is undefined', async () => {
    const logger = { error: jest.fn(data => data) };
    const collectionName = 'collectionName';
    const schema = {
      index: jest.fn((fields, unique) => ({ fields, unique }))
    };
    const providerConnection = {
      connection: {
        model: jest.fn((collectionName, schema) => ({ collectionName, schema }))
      }
    };
    const indexes = undefined;

    try {
      new Model({ providerConnection, logger, collectionName, schema, indexes });
    } catch (error) {

      expect(error).toBeInstanceOf(Error);

      expect(logger.error).toHaveBeenCalled();
      expect(schema.index).not.toHaveBeenCalled();
      expect(providerConnection.connection.model).not.toHaveBeenCalled();
    }
  });
});
