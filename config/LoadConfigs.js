require('dotenv').config();

const nodeEnv = process.env.NODE_ENV || 'dev';

const EnumEnvPaths = {
  dev: './envs/dev',
  prod: './envs/prod',
  test: './envs/test'
};

module.exports = {
  loadEnvironment: () => {
    const path = EnumEnvPaths[nodeEnv];

    if (!path) {
      throw new Error('invalid environment');
    }

    return require(path);
  }
};
