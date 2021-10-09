const Model = require('../../../../../src/infra/database/models/Model');
const BatatinhaModel = require('../../../../../src/infra/database/models/batatinha/BatatinhaModel');

describe('BatatinhaModel', () => {
  test('Should create batatinha model instance', async () => {
    const providerConnection = {
      connection: {
        model: () => 'success'
      }
    };

    const environment = {
      db: {
        collections: {
          batatinha: {
            name: 'batatinhas'
          }
        }
      }
    };

    const logger = {
      error: jest.fn(data => data)
    };

    const batatinhaModel = new BatatinhaModel({ providerConnection, environment, logger });

    expect(batatinhaModel).toBeInstanceOf(Model);
    expect(batatinhaModel.collectionName).toStrictEqual('batatinhas');
    expect(batatinhaModel.indexes).toBeInstanceOf(Array);
    expect(batatinhaModel.indexes).toHaveLength(2);
  });
});
