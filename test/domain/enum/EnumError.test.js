const { EnumError } = require('./../../../src/domain/enum');

describe('EnumError', () => {
  test('Should call contract error successfully', async () => {
    const expectedResponse = {
      defaultErrorCode: '400',
      defaultErrorMessage: 'Contract validation error'
    };

    expect(EnumError.CONTRACT).toStrictEqual(expectedResponse);
  });

  test('Should call not found error successfully', async () => {
    const expectedResponse = {
      defaultErrorCode: '404',
      defaultErrorMessage: 'Not Found'
    };

    expect(EnumError.NOT_FOUND).toStrictEqual(expectedResponse);
  });

  test('Should call operation error successfully', async () => {
    const expectedResponse = {
      defaultErrorCode: '500',
      defaultErrorMessage: 'Internal Server Error'
    };

    expect(EnumError.OPERATION).toStrictEqual(expectedResponse);
  });
});
