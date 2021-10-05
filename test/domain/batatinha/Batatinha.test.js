const BatatinhaDomain = require('../../../src/domain/batatinha/Batatinha');
const generateBatatinhaRequest = require('../../mocks/batatinha/generateBatatinhaRequest');

describe('CreateBatatinhaService', () => {
  test('Should call batatinha domain, batatinha repository and return created batatinha with batatinha_id', async () => {
    const batatinha = generateBatatinhaRequest();

    const batatinhaDomainResponse = new BatatinhaDomain(batatinha);

    expect(batatinhaDomainResponse).toStrictEqual(batatinha);
  });

  test('Should call batatinha domain, batatinha repository and return created batatinha without batatinha_id', async () => {
    const batatinha = generateBatatinhaRequest();

    delete batatinha.batatinha_id;

    const batatinhaDomainResponse = new BatatinhaDomain(batatinha);

    expect(batatinhaDomainResponse).toBeInstanceOf(BatatinhaDomain);
    expect(batatinhaDomainResponse).toHaveProperty('batatinha_id');
  });
});
