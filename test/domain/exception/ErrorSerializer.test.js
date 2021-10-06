const errorSerializer = require('../../../src/domain/exception/ErrorSerializer');

describe('ErrorSerializer', () => {
  test('Should return only expected data with code', async () => {
    const error = {
      statusCode: 'statusCode',
      code: 'code',
      message: 'Some message',
      details: [{ anyDetail: 'anyDetail' }]
    };

    const serializedError = errorSerializer(error);

    expect(serializedError.statusCode).toBeUndefined();
    expect(serializedError.code).toStrictEqual(error.code);
    expect(serializedError.message).toStrictEqual(error.message);
    expect(serializedError.details).toEqual(expect.arrayContaining(error.details));
  });

  test('Should return only expected data with statusCode', async () => {
    const error = {
      statusCode: 'statusCode',
      message: 'Some message',
      details: [{ anyDetail: 'anyDetail' }]
    };

    const serializedError = errorSerializer(error);

    expect(serializedError.statusCode).toBeUndefined();
    expect(serializedError.code).toStrictEqual(error.statusCode);
    expect(serializedError.message).toStrictEqual(error.message);
    expect(serializedError.details).toEqual(expect.arrayContaining(error.details));
  });

  test('Should return only expected data without details', async () => {
    const error = {
      code: 'code',
      message: 'Some message'
    };

    const serializedError = errorSerializer(error);

    expect(serializedError.details).toHaveLength(0);
    expect(serializedError.statusCode).toBeUndefined();
    expect(serializedError.code).toStrictEqual(error.code);
    expect(serializedError.message).toStrictEqual(error.message);
  });
});





module.exports = ({ statusCode, code, message, details = [] }) =>
  ({ code: code || statusCode, message, details });
