const Exception = require('./Exception');

const { EnumError } = require('../../domain/enum');

const {
  defaultErrorCode,
  defaultErrorMessage,
} = EnumError.CONTRACT;

module.exports = class ContractException extends Exception {
  constructor(error = {}) {
    const parsedError = _formatDetails(error.details);

    super({ details: parsedError }, { defaultErrorCode, defaultErrorMessage });
  }
};

const _formatDetails = (details = []) =>
  details.map(detail => ({
    error_code: detail.context.key,
    error_message: detail.message
  }));
