module.exports = () => ({
  createBatatinha: ({ headers, body, res }) => {
    return res.status(200).send({ ...headers, ...body });
  }
});
