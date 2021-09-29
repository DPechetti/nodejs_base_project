const { v4: uuidV4, } = require('uuid');

module.exports = class Batatinha {
  constructor({ batatinha_header, batatinha_id, batatinha_name, batatinha_email }) {
    this.batatinha_header = batatinha_header;
    this.batatinha_id = batatinha_id || uuidV4();
    this.batatinha_name = batatinha_name;
    this.batatinha_email = batatinha_email;
  }
};
