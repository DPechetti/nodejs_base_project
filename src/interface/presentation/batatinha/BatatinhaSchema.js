const joi = require('joi');

module.exports = () => ({
  common: {
    headers: joi.object().keys({
      batatinha_header: joi.string().required(),
    })
  },

  createBatatinha: {
    body: joi.object({
      batatinha_id: joi.string().guid({ version: 'uuidv4' }).required(),
      batatinha_name: joi.string().required(),
    })
  }
});
