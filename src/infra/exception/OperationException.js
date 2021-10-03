const Exception = require('./Exception');

const { EnumError } = require('../../domain/enum');

const {
  defaultErrorCode,
  defaultErrorMessage
} = EnumError.OPERATION;

module.exports = class OperationException extends Exception {
  constructor(error = {}) {
    super(error, { defaultErrorCode, defaultErrorMessage });
  }
};
