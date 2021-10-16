const batatinhaMapper = {
  toResponse: ({ batatinha_header, batatinha_id, batatinha_name, batatinha_email }) =>
    ({ batatinha_header, batatinha_id, batatinha_name, batatinha_email })
};

module.exports = batatinhaMapper;
