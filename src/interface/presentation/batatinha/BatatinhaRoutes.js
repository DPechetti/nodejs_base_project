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
    }
  ];
};
