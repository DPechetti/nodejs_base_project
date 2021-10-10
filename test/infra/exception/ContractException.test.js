const ContractException = require('../../../src/infra/exception/ContractException');

describe('ContractException', () => {
  test('Should instantiate error with expected fields', () => {
    const error = {
      details: [
        {
          message: 'error message',
          context: { key: 'some_key' }
        },
        {
          message: 'error message',
          context: { key: 'another_key' }
        }
      ]
    };

    const exception = new ContractException(error);

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('400');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('Contract validation error');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toBeInstanceOf(Array);
    expect(exception.details).toHaveLength(2);

    expect(exception.details[0]).toHaveProperty('error_code');
    expect(exception.details[0].error_code).toStrictEqual('some_key');
    expect(exception.details[0]).toHaveProperty('error_message');
    expect(exception.details[0].error_message).toStrictEqual('error message');

    expect(exception.details[1]).toHaveProperty('error_code');
    expect(exception.details[1].error_code).toStrictEqual('another_key');
    expect(exception.details[1]).toHaveProperty('error_message');
    expect(exception.details[1].error_message).toStrictEqual('error message');
  });

  test('Should instantiate error when details do not exist', () => {
    const error = {};

    const exception = new ContractException(error);

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('400');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('Contract validation error');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toBeInstanceOf(Array);
    expect(exception.details).toHaveLength(0);
  });

  test('Should instantiate error when error is not passed', () => {
    const exception = new ContractException();

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('400');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('Contract validation error');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toBeInstanceOf(Array);
    expect(exception.details).toHaveLength(0);
  });
});
