module.exports = () => ({
  createBatatinha: async ({ headers, body, res, container }) => {
    const { createBatatinhaOperation, batatinhaSerializer } = container.cradle;

    const createdBatatinha = await createBatatinhaOperation.execute({ body, headers });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(201).send(serializedBatatinha);
  }
});
