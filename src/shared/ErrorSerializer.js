module.exports = ({ statusCode, code, message, details = [] }) =>
  ({ code: code || statusCode, message, details });
