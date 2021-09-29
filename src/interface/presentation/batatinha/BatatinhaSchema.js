const joi = require('joi');

module.exports = () => ({
  common: {
    headers: joi.object().keys({
      batatinha_header: joi.string().required(),
    })
  },

  createBatatinha: {
    body: joi.object({
      batatinha_name: joi.string().required(),
      batatinha_email: joi.string().email().required()
    })
  }
});
