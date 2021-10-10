const Exception = require('../../../src/infra/exception/Exception');

describe('Exception', () => {
  test('Should instantiate error with expected fields', () => {
    const error = { code: 'any_code', message: 'any_message', details: [] };
    const defaults = { defaultErrorCode: 'any_default_code', defaultErrorMessage: 'any_default_message' };

    const exception = new Exception(error, defaults);

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('any_code');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('any_message');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toBeInstanceOf(Array);
    expect(exception.details).toHaveLength(0);
  });

  test('Should instantiate error with default fields', () => {
    const error = { details: [] };
    const defaults = { defaultErrorCode: 'any_default_code', defaultErrorMessage: 'any_default_message' };

    const exception = new Exception(error, defaults);

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('any_default_code');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('any_default_message');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toBeInstanceOf(Array);
    expect(exception.details).toHaveLength(0);
  });
});
