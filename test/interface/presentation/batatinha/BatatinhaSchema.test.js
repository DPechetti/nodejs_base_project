const BatatinhaSchema = require('../../../../src/interface/presentation/batatinha/BatatinhaSchema');
const generateBatatinhaRequest = require('../../../mocks/batatinha/generateBatatinhaRequest');

describe('BatatinhaSchema', () => {
  const batatinha = generateBatatinhaRequest();

  describe('#common', () => {
    describe('#headers', () => {
      let data, headers;

      beforeEach(() => {
        const { batatinha_header } = batatinha;
        data = {
          batatinha_header
        };

        headers = BatatinhaSchema().common.headers;
      });

      test('returns validated object', () => {
        const { error } = headers.validate(data);

        expect(error).toStrictEqual(undefined);
      });
    });
  });

  describe('#createBatatinha', () => {
    describe('#body', () => {
      let data, body;

      beforeEach(() => {
        const { batatinha_name, batatinha_email } = batatinha;
        data = {
          batatinha_name,
          batatinha_email
        };

        body = BatatinhaSchema().createBatatinha.body;
      });

      test('returns validated object', () => {
        const { error } = body.validate(data);

        expect(error).toStrictEqual(undefined);
      });
    });
  });
});
