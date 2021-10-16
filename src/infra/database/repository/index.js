const { OperationException } = require('../../exception');

module.exports = class Repository {
  constructor({ repositoryModel, repositoryMapper }) {
    this.repositoryModel = repositoryModel;
    this.repositoryMapper = repositoryMapper;
  }

  async create(entity) {
    try {
      const model = this.repositoryModel(
        this.repositoryMapper.toDatabase(entity)
      );

      const response = await model.save();

      return this.repositoryMapper.toResponse(response);
    } catch (error) {
      throw new OperationException(error);
    }
  }
};
