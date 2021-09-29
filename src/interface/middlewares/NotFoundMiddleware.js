const { NotFoundException } = require('../../infra/exception');

module.exports = () => () => {
  throw new NotFoundException({
    details: [
      {
        error_code: 'Resource not found',
        error_message: 'Looks like the route you\'re looking for doesn\'t exist'
      }
    ]
  });
};
