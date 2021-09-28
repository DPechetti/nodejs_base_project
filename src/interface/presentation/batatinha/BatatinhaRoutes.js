module.exports = ({ container }) => {
  const { batatinhaSchema, batatinhaController } = container.cradle;

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
