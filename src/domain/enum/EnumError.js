const Enum = require('./Enum');

module.exports = Enum({
  CONTRACT: {
    defaultErrorCode: '400',
    defaultErrorMessage: 'Contract validation error'
  },

  NOT_FOUND: {
    defaultErrorCode: '404',
    defaultErrorMessage: 'Not Found'
  },

  OPERATION: {
    defaultErrorCode: '500',
    defaultErrorMessage: 'Internal Server Error'
  }
});
