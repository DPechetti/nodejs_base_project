const { OperationException } = require('../../../src/infra/exception');
const ErrorMiddleware = require('../../../src/interface/middlewares/ErrorMiddleware');

describe('ErrorMiddleware', () => {
  test('Should return a serialized error', () => {
    const error = new OperationException();
    const logger = {
      error: jest.fn(data => data)
    };
    const errorSerializer = jest.fn(data => data);

    const res = {
      status: () => ({
        send: jest.fn(data => data)
      })
    };

    const errorMiddleware = ErrorMiddleware({ logger, errorSerializer });

    const errorMiddlewareResponse = errorMiddleware(error, undefined, res, undefined);

    expect(errorMiddlewareResponse).toBeInstanceOf(Error);

    expect(errorMiddlewareResponse).toHaveProperty('code');
    expect(errorMiddlewareResponse.code).toStrictEqual('500');
    expect(errorMiddlewareResponse).toHaveProperty('message');
    expect(errorMiddlewareResponse.message).toStrictEqual('Internal Server Error');
  });
});
