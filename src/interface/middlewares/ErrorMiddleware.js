// eslint-disable-next-line no-unused-vars
module.exports = ({ logger, errorSerializer }) => (error, req, res, next) => {
  const serializedError = errorSerializer(error);

  logger.error(serializedError);

  return res.status(serializedError.code).send(serializedError);
};
