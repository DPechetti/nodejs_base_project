const chance = require('chance')();
const { v4: uuidV4, } = require('uuid');

module.exports = qtd => {
  if (!qtd) return generateBatatinhaPayload();

  const batatinhas = [];

  for (let i = 0; i < qtd; i++) batatinhas.push(generateBatatinhaPayload());

  return batatinhas;
};

const generateBatatinhaPayload = () => ({
  batatinha_id: uuidV4(),
  batatinha_name: chance.name(),
  batatinha_email: chance.email()
});
