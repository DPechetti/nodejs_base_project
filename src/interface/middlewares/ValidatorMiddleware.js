const ContractException = require('../../infra/exception/ContractException');

module.exports = () => ({
  validateContract: (validation) => (req, res, next) => {
    try {
      const schemaOptions = { abortEarly: false, allowUnknown: true, stripUnknown: true };

      Object.keys(validation).forEach(validationKey => {
        const { error, value } = validation[validationKey].validate(req[validationKey] || {}, schemaOptions);

        if (error) throw new ContractException(error);

        req[validationKey] = value;
      });

      return next();
    } catch (error) {
      next(error);
    }
  }
});
