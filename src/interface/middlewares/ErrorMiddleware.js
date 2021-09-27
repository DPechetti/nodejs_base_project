// eslint-disable-next-line no-unused-vars
module.exports = ({ container }) => (error, req, res, next) => {
  const { logger, errorSerializer } = container.cradle;

  const serializedError = errorSerializer(error);

  logger.error(serializedError);

  return res.status(serializedError.code).send(serializedError);
};
