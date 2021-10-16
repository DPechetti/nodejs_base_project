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
      routePath: '/:batatinha_id',
      schemaValidation: {
        headers: batatinhaSchema.common.headers,
        params: batatinhaSchema.getBatatinha.params
      },
      handler: batatinhaController.getBatatinha
    }
  ];
};
