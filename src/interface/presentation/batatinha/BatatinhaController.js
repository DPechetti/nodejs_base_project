module.exports = ({ batatinhaSerializer, createBatatinhaOperation, getBatatinhaOperation }) => ({
  createBatatinha: async ({ headers, body, res }) => {
    const createdBatatinha = await createBatatinhaOperation.execute({ ...headers, ...body });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(201).send(serializedBatatinha);
  },

  getBatatinha: async ({ headers, params, res }) => {
    const createdBatatinha = await getBatatinhaOperation.execute({ ...headers, ...params });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(200).send(serializedBatatinha);
  }
});
