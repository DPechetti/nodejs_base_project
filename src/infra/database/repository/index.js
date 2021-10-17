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
      throw new OperationException(error);
    }
  }

  async get(params) {
    try {
      const response = await this.repositoryModel.findOne(params);

      if (!response)
        return null;

      return this.repositoryMapper.toResponse(response);
    } catch (error) {
      throw new OperationException(error);
    }
  }
};
