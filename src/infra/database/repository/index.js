const { OperationException } = require('../../exception');

module.exports = class Repository {
  constructor({ repositoryModel, repositoryMapper }) {
    this.repositoryModel = repositoryModel;
    this.repositoryMapper = repositoryMapper;
  }

  async create(entity) {
    try {
      const response = await this.repositoryModel(entity).save();

      return this.repositoryMapper.toResponse(response);
    } catch (error) {
      throw new OperationException(_databaseError('An error occurred saving to database'));
    }
  }

  async get(params) {
    try {
      const response = await this.repositoryModel.findOne(params);

      if (!response)
        return null;

      return this.repositoryMapper.toResponse(response);
    } catch (error) {
      throw new OperationException(_databaseError('An error occurred while doing a get to the database'));
    }
  }
};

const _databaseError = (error_message) => ({
  details: [
    {
      error_code: 'Database error',
      error_message
    }
  ]
});
