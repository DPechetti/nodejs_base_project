const Enum = require('./../../../src/domain/enum/Enum');

describe('Enum', () => {
  test('Should return enum keys successfully', async () => {
    const myEnum = Enum({
      SOME_VALUE: 'someValue',
      ANOTHER_VALUE: 'anotherValue'
    });

    const enumKeys = myEnum.keys();

    expect(enumKeys).toHaveLength(2);
    expect(enumKeys).toContain(['SOME_VALUE', 'ANOTHER_VALUE']);
  });

  test('Should return enum values successfully', async () => {
    const myEnum = Enum({
      SOME_VALUE: 'someValue',
      ANOTHER_VALUE: 'anotherValue'
    });

    const enumValues = myEnum.values();

    expect(enumValues).toHaveLength(2);
    expect(enumValues).toContain(['someValue', 'anotherValue']);
  });
});
