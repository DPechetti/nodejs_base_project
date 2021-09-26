const pino = require('pino')({ prettyPrint: true });

module.exports = {
  info: message => pino.info(message),
  error: message => pino.error(message)
};
