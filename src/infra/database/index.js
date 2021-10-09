const mongoose = require('mongoose');
const { OperationException } = require('../exception');

module.exports = class ProviderConnection {
  constructor({ environment, logger }) {
    this.environment = environment;
    this.logger = logger;
    this.connection = null;
    this.mongoose = mongoose;
  }

  async connect() {
    if (this.connection)
      return this.connection;

    try {
      const { uri, options } = await this._configureUri(this.environment.db);

      this.connection = await this.mongoose.createConnection(uri, options);

      this.logger.info('Database connection established');
      this._checkConnection();

      return this.connection;
    } catch (err) {
      this.logger.error('Error connecting to database');

      throw new OperationException(err);
    }
  }

  async _configureUri(configDB) {
    let { dialect, username, password, host, port, databaseName, options } = configDB;

    const userCredentials = `${encodeURIComponent(username)}:${encodeURIComponent(password)}`;
    const uri = `${dialect}://${userCredentials}@${host}:${port}/${databaseName}`;

    return { uri, options };
  }

  _checkConnection() {
    this.connection.on('connected', () => this.logger.info('Database connected'));
    this.connection.on('error', error => { this.logger.error(error); process.exit(1); });
    this.connection.on('disconnected', () => this.logger.error('Database connection lost'));
    this.connection.on('reconnected', () => this.logger.info('Database successfully reconnected'));
    this.connection.on('reconnectFailed', () => {
      this.logger.error('Database reconnection fail, killing the process');
      process.exit(1);
    });
  }
};
