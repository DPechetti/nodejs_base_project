const BatatinhaRoutes = require('../../../../src/interface/presentation/batatinha/BatatinhaRoutes');

describe('BatatinhaRoutes', () => {
  test('Should return routes', async () => {
    const batatinhaSchema = {
      common: { headers: 'headers' },
      createBatatinha: { body: 'body' },
      getBatatinha: { params: 'params' },
      updateBatatinha: { params: 'params', body: 'body' }
    };
    const batatinhaController = {
      createBatatinha: 'createBatatinha',
      getBatatinha: 'getBatatinha',
      updateBatatinha: 'updateBatatinha'
    };

    const batatinhaRoutes = BatatinhaRoutes({ batatinhaSchema, batatinhaController });

    expect(batatinhaRoutes).toBeInstanceOf(Array);

    const [createBatatinha, getBatatinha, updateBatatinha] = batatinhaRoutes;

    expect(createBatatinha.httpMethod).toStrictEqual('post');
    expect(createBatatinha.routePath).toStrictEqual('/');
    expect(createBatatinha.schemaValidation).toStrictEqual({
      headers: batatinhaSchema.common.headers,
      body: batatinhaSchema.createBatatinha.body
    });
    expect(createBatatinha.handler).toStrictEqual(batatinhaController.createBatatinha);

    expect(getBatatinha.httpMethod).toStrictEqual('get');
    expect(getBatatinha.routePath).toStrictEqual('/:batatinha_id');
    expect(getBatatinha.schemaValidation).toStrictEqual({
      headers: batatinhaSchema.common.headers,
      params: batatinhaSchema.getBatatinha.params
    });
    expect(getBatatinha.handler).toStrictEqual(batatinhaController.getBatatinha);

    expect(updateBatatinha.httpMethod).toStrictEqual('patch');
    expect(updateBatatinha.routePath).toStrictEqual('/:batatinha_id');
    expect(updateBatatinha.schemaValidation).toStrictEqual({
      headers: batatinhaSchema.common.headers,
      params: batatinhaSchema.updateBatatinha.params,
      body: batatinhaSchema.updateBatatinha.body
    });
    expect(updateBatatinha.handler).toStrictEqual(batatinhaController.updateBatatinha);
  });
});
