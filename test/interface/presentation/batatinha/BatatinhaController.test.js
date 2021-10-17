const BatatinhaController = require('../../../../src/interface/presentation/batatinha/BatatinhaController');
const generateBatatinhaRequest = require('../../../mocks/batatinha/generateBatatinhaRequest');

describe('BatatinhaController', () => {
  describe('#createBatatinha', () => {
    let batatinha, batatinhaController, headers, body, res, createBatatinhaOperation, batatinhaSerializer;

    beforeEach(() => {
      batatinha = generateBatatinhaRequest();
      const { batatinha_header, ...batatinhaBody } = batatinha;

      createBatatinhaOperation = { execute: jest.fn(() => Promise.resolve(batatinha)) };
      batatinhaSerializer = { serialize: jest.fn(() => batatinha) };
      headers = { batatinha_header };
      body = batatinhaBody;
      res = {
        status: jest.fn(() => ({ send: () => batatinha }))
      };

      batatinhaController = BatatinhaController({ createBatatinhaOperation, batatinhaSerializer });
    });

    test('createBatatinha', async () => {
      const createdBatatinha = await batatinhaController.createBatatinha({ headers, body, res });

      expect(createdBatatinha).toEqual(batatinha);

      expect(createBatatinhaOperation.execute).toHaveBeenCalledTimes(1);
      expect(createBatatinhaOperation.execute).toHaveBeenCalledWith(batatinha);

      expect(batatinhaSerializer.serialize).toHaveBeenCalledTimes(1);
      expect(batatinhaSerializer.serialize).toHaveBeenCalledWith(batatinha);

      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe('#getBatatinha', () => {
    let batatinha, batatinhaController, headers, params, res, getBatatinhaOperation, batatinhaSerializer;

    beforeEach(() => {
      batatinha = generateBatatinhaRequest();
      const { batatinha_header, batatinha_id } = batatinha;

      getBatatinhaOperation = { execute: jest.fn(() => Promise.resolve(batatinha)) };
      batatinhaSerializer = { serialize: jest.fn(() => batatinha) };
      headers = { batatinha_header };
      params = { batatinha_id };
      res = {
        status: jest.fn(() => ({ send: () => batatinha }))
      };

      batatinhaController = BatatinhaController({ getBatatinhaOperation, batatinhaSerializer });
    });

    test('getBatatinha', async () => {
      const getdBatatinha = await batatinhaController.getBatatinha({ headers, params, res });

      expect(getdBatatinha).toEqual(batatinha);

      expect(getBatatinhaOperation.execute).toHaveBeenCalledTimes(1);
      expect(getBatatinhaOperation.execute).toHaveBeenCalledWith({
        batatinha_header: batatinha.batatinha_header,
        batatinha_id: batatinha.batatinha_id
      });

      expect(batatinhaSerializer.serialize).toHaveBeenCalledTimes(1);
      expect(batatinhaSerializer.serialize).toHaveBeenCalledWith(batatinha);

      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
