const BatatinhaRoutes = require('../../../../src/interface/presentation/batatinha/BatatinhaRoutes');

describe('BatatinhaRoutes', () => {
  test('Should return routes', async () => {
    const batatinhaSchema = {
      common: { headers: 'headers' },
      createBatatinha: { body: 'body' }
    };
    const batatinhaController = {
      createBatatinha: 'createBatatinha'
    };

    const batatinhaRoutes = BatatinhaRoutes({ batatinhaSchema, batatinhaController });

    expect(batatinhaRoutes).toBeInstanceOf(Array);

    const [createBatatinha] = batatinhaRoutes;

    expect(createBatatinha.httpMethod).toStrictEqual('post');
    expect(createBatatinha.routePath).toStrictEqual('/');
    expect(createBatatinha.schemaValidation).toStrictEqual({
      headers: batatinhaSchema.common.headers,
      body: batatinhaSchema.createBatatinha.body
    });
    expect(createBatatinha.handler).toStrictEqual(batatinhaController.createBatatinha);
  });
});
