const ControllerMiddleware = require('../../middlewares/ControllerMiddleware');

module.exports = ({
  batatinhaSerializer,
  createBatatinhaOperation,
  getBatatinhaOperation,
  updateBatatinhaOperation,
  deleteBatatinhaOperation
}) => ({
  createBatatinha: ControllerMiddleware(async ({ headers, body, res }) => {
    const createdBatatinha = await createBatatinhaOperation.execute({ ...headers, ...body });
    const serializedBatatinha = batatinhaSerializer.serialize(createdBatatinha);

    return res.status(201).send(serializedBatatinha);
  }),

  getBatatinha: ControllerMiddleware(async ({ headers, params, res }) => {
    const foundBatatinha = await getBatatinhaOperation.execute({ ...headers, ...params });
    const serializedBatatinha = batatinhaSerializer.serialize(foundBatatinha);

    return res.status(200).send(serializedBatatinha);
  }),

  updateBatatinha: ControllerMiddleware(async ({ headers, params, body, res }) => {
    const updatedBatatinha = await updateBatatinhaOperation.execute({ ...headers, ...params, ...body });
    const serializedBatatinha = batatinhaSerializer.serialize(updatedBatatinha);

    return res.status(200).send(serializedBatatinha);
  }),

  deleteBatatinha: ControllerMiddleware(async ({ headers, params, res }) => {
    await deleteBatatinhaOperation.execute({ ...headers, ...params });

    return res.status(204).send();
  })
});
