module.exports = () => ({
  serialize: ({
    headers: { batatinha_header },
    body: { batatinha_id, batatinha_name },
  }) => ({
    batatinha_header, batatinha_id, batatinha_name
  })
});
