const Enum = require('./Enum');

module.exports = Enum({
  NOT_FOUND: {
    defaultErrorCode: '404',
    defaultErrorMessage: 'Not Found',
    defaultErrorType: 'notFound',
  }
});
