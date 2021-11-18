const joi = require('joi');

module.exports = () => ({
  common: {
    headers: joi.object().keys({
      batatinha_header: joi.string().guid({ version: 'uuidv4' }).required(),
    })
  },

  createBatatinha: {
    body: joi.object({
      batatinha_name: joi.string().min(3).max(50).required(),
      batatinha_email: joi.string().email().required()
    })
  },

  getBatatinha: {
    params: joi.object({
      batatinha_id: joi.string().guid({ version: 'uuidv4' }).required()
    })
  },

  updateBatatinha: {
    params: joi.object({
      batatinha_id: joi.string().guid({ version: 'uuidv4' }).required()
    }),

    body: joi.object({
      batatinha_name: joi.string().min(3).max(50).required(),
      batatinha_email: joi.string().email().required()
    })
  },

  deleteBatatinha: {
    params: joi.object({
      batatinha_id: joi.string().guid({ version: 'uuidv4' }).required()
    })
  }
});
