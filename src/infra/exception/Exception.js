module.exports = class Exception extends Error {
  constructor(error, { defaultErrorCode, defaultErrorMessage }) {
    const message = _formatErrorProperty(error.message, defaultErrorMessage);

    super(message);

    this.code = _formatErrorProperty(error.code, defaultErrorCode);
    this.details = error.details;
  }
};

const _formatErrorProperty = (property, defaultProperty) =>
  property ? property : defaultProperty;
