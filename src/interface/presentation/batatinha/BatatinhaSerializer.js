const serialize = ({ batatinha_header, batatinha_id, batatinha_name, batatinha_email }) => ({
  batatinha_header, batatinha_id, batatinha_name, batatinha_email
});

const serializeArray = ({
  docs,
  total,
  limit,
  pages,
  page
}) => {
  return {
    batatinhas: docs.map(serialize),
    total,
    limit,
    pages,
    page
  };
};

module.exports = () => ({
  serialize,
  serializeArray
});
