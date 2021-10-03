const { Schema } = require('mongoose');

module.exports = () => {
  const batatinhaSchema = new Schema({
    batatinha_header: {
      type: String,
      required: true
    },
    batatinha_id: {
      type: String,
      required: true,
    },
    batatinha_name: {
      type: String,
      required: true,
    },
    batatinha_email: {
      type: String,
      required: true,
    }
  });

  return batatinhaSchema;
};
