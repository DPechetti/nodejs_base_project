const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = ({
  notFoundMiddleware,
  httpErrorMiddleware,
  routerRegister,
  batatinhaRoutes
}) => {
  const apiRouter = Router();

  apiRouter
    .use(cors())
    .use(bodyParser.json())
    .use('/api/batatinha', routerRegister.register(batatinhaRoutes))
    .use(notFoundMiddleware)
    .use(httpErrorMiddleware);

  return apiRouter;
};
