module.exports = ({ batatinhaSchema, batatinhaController }) => {
  return [
    {
      httpMethod: 'post',
      routePath: '/',
      schemaValidation: {
        headers: batatinhaSchema.common.headers,
        body: batatinhaSchema.createBatatinha.body
      },
      handler: batatinhaController.createBatatinha
    },
    {
      httpMethod: 'get',
      routePath: '/',
      schemaValidation: {
        headers: batatinhaSchema.common.headers,
        query: batatinhaSchema.listBatatinha.query,
      },
      handler: batatinhaController.listBatatinha
    },
    {
      httpMethod: 'get',
      routePath: '/:batatinha_id',
      schemaValidation: {
        headers: batatinhaSchema.common.headers,
        params: batatinhaSchema.getBatatinha.params
      },
      handler: batatinhaController.getBatatinha
    },
    {
      httpMethod: 'patch',
      routePath: '/:batatinha_id',
      schemaValidation: {
        headers: batatinhaSchema.common.headers,
        params: batatinhaSchema.updateBatatinha.params,
        body: batatinhaSchema.updateBatatinha.body
      },
      handler: batatinhaController.updateBatatinha
    },
    {
      httpMethod: 'delete',
      routePath: '/:batatinha_id',
      schemaValidation: {
        headers: batatinhaSchema.common.headers,
        params: batatinhaSchema.deleteBatatinha.params,
      },
      handler: batatinhaController.deleteBatatinha
    }
  ];
};
