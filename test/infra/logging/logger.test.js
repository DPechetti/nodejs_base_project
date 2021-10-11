const logger = require('../../../src/infra/logging/logger');
jest.mock('pino', () => () => ({ info: data => `pino ${data}`, error: data => `pino ${data}` }));

describe('Logger', () => {
  describe('#info', () => {
    test('Should call the info logger', () => {
      const logedMessage = logger.info('info');

      expect(logedMessage).toStrictEqual('pino info');
    });
  });

  describe('#error', () => {
    test('Should call the error logger', () => {
      const logedMessage = logger.error('error');

      expect(logedMessage).toStrictEqual('pino error');
    });
  });
});
