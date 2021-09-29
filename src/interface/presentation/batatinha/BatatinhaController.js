module.exports = () => ({
  createBatatinha: async ({ headers, body, res, container }) => {
    const { createBatatinhaOperation } = container.cradle;

    const createdBatatinha = await createBatatinhaOperation.execute({ body, headers });

    return res.status(201).send(createdBatatinha);
  }
});
