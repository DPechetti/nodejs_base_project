const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = ({
  notFoundMiddleware,
  errorMiddleware,
  routerRegister,
  batatinhaRoutes
}) => {
  const apiRouter = Router();

  apiRouter
    .use(cors())
    .use(bodyParser.json())
    .use('/api/batatinha', routerRegister.execute(batatinhaRoutes))
    .use(notFoundMiddleware)
    .use(errorMiddleware);

  return apiRouter;
};
