const Exception = require('./Exception');

const { EnumError } = require('../../domain/enum');

const {
  defaultErrorCode,
  defaultErrorMessage,
  defaultErrorType
} = EnumError.NOT_FOUND;

module.exports = class NotFoundException extends Exception {
  constructor(error = {}) {
    super(error, { defaultErrorCode, defaultErrorMessage });
    this.error_type = defaultErrorType;
  }
};
