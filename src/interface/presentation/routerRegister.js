const { Router } = require('express');

module.exports = ({ validatorMiddleware }) => ({
  execute: (routes) => {
    const router = Router();

    routes.forEach(route => {
      const { httpMethod, routePath, schemaValidation, handler } = route;

      const schemaValidations = [validatorMiddleware.validateContract(schemaValidation)];

      router[httpMethod](routePath, ...schemaValidations, handler());
    });

    return router;
  }
});
