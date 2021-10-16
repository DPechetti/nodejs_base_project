const OperationException = require('../../../src/infra/exception/OperationException');

describe('OperationException', () => {
  test('Should instantiate error with expected fields', () => {
    const error = { code: 'any_code', message: 'any_message', details: [] };

    const exception = new OperationException(error);

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('any_code');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('any_message');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toBeInstanceOf(Array);
    expect(exception.details).toHaveLength(0);
  });

  test('Should instantiate error without fields', () => {
    const exception = new OperationException();

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('500');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('Internal Server Error');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toStrictEqual(undefined);
  });
});
