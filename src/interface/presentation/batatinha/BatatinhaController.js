module.exports = ({ createBatatinhaOperation, batatinhaSerializer }) => ({
  createBatatinha: async ({ headers, body, res }) => {
    const createdBatatinha = await createBatatinhaOperation.execute({ ...headers, ...body });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(201).send(serializedBatatinha);
  }
});
