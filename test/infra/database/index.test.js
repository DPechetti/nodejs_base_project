const { EventEmitter } = require('events');
const ProviderConnection = require('../../../src/infra/database');

describe('ProviderConnection', () => {
  describe('#connect', () => {
    let providerConnection, logger;

    beforeEach(() => {
      logger = {
        error: jest.fn(data => data),
        info: jest.fn(data => data)
      };
      const environment = {
        db: {
          dialect: 'mongodb',
          username: 'any_username',
          password: 'any_password',
          host: '127.0.0.1',
          port: '27017',
          databaseName: 'any_databaseName',
          options: {}
        }
      };

      providerConnection = new ProviderConnection({ environment, logger });
    });

    test('Should create connection successfully', async () => {
      await providerConnection.connect();

      expect(logger.error).not.toHaveBeenCalled();
      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith('Database connection established');
    });

    test('Should return connection successfully when connection already exists', async () => {
      await providerConnection.connect();
      await providerConnection.connect();

      expect(logger.error).not.toHaveBeenCalled();
      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith('Database connection established');
    });

    test('Should return connection error when not pass environment', async () => {
      try {
        await new ProviderConnection({ logger }).connect();

        providerConnection.connection = { on: jest.fn() };
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.code).toStrictEqual('500');
        expect(error.message).toStrictEqual('Cannot read property \'db\' of undefined');
        expect(error.stack).toContain('Error: Cannot read property \'db\' of undefined');

        expect(logger.info).not.toHaveBeenCalled();
        expect(logger.error).toHaveBeenCalledTimes(1);
        expect(logger.error).toHaveBeenCalledWith('Error connecting to database');
      }
    });
  });

  describe('#_checkConnection', () => {
    let providerConnection, logger;

    beforeEach(() => {
      logger = {
        error: jest.fn(data => data),
        info: jest.fn(data => data)
      };

      providerConnection = new ProviderConnection({ logger });
      providerConnection.connection = new EventEmitter();

      providerConnection._checkConnection();
      process.exit = jest.fn();
    });

    test('Should return database connected', async () => {
      providerConnection.connection.emit('connected');
      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith('Database connected');
    });

    test('Should return error', async () => {
      providerConnection.connection.emit('error', 'any_error');
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith('any_error');
      expect(process.exit).toHaveBeenCalledTimes(1);
      expect(process.exit).toHaveBeenCalledWith(1);
    });

    test('Should return database connection lost', async () => {
      providerConnection.connection.emit('disconnected');
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith('Database connection lost');
    });

    test('Should return database successfully reconnected', async () => {
      providerConnection.connection.emit('reconnected');
      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith('Database successfully reconnected');
    });

    test('Should return reconnection fail', async () => {
      providerConnection.connection.emit('reconnectFailed');
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith('Database reconnection fail, killing the process');
      expect(process.exit).toHaveBeenCalledTimes(1);
      expect(process.exit).toHaveBeenCalledWith(1);
    });
  });
});
