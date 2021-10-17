const ControllerMiddleware = require('../../middlewares/ControllerMiddleware');

module.exports = ({ batatinhaSerializer, createBatatinhaOperation, getBatatinhaOperation }) => ({
  createBatatinha: ControllerMiddleware(async ({ headers, body, res }) => {
    const createdBatatinha = await createBatatinhaOperation.execute({ ...headers, ...body });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(201).send(serializedBatatinha);
  }),

  getBatatinha: ControllerMiddleware(async ({ headers, params, res }) => {
    const createdBatatinha = await getBatatinhaOperation.execute({ ...headers, ...params });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(200).send(serializedBatatinha);
  })
});
