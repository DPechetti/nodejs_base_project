const NotFoundException = require('../../../src/infra/exception/NotFoundException');

describe('NotFoundException', () => {
  test('Should instantiate error without fields', () => {
    const exception = new NotFoundException();

    expect(exception).toBeInstanceOf(Error);

    expect(exception).toHaveProperty('code');
    expect(exception.code).toStrictEqual('404');

    expect(exception).toHaveProperty('message');
    expect(exception.message).toStrictEqual('Not Found');

    expect(exception).toHaveProperty('details');
    expect(exception.details).toStrictEqual(undefined);
  });
});
