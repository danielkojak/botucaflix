const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

// omitir os `console.log`s dos testes gerando um `stub` pra função
/* const consoleLogStub = stub(console, 'log');
before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore()); */

describe('Rota GET /users', () => {
  it('Testa se rota GET de /users retorna status 200', async () => {
    const res = await chai.request(app).get('/users/');
    expect(res).to.have.status(200);
  });
  it('Testa se rota GET de /users retorna um array', async () => {
    const res = await chai.request(app).get('/users/');
    expect(res.body).to.be.an('array');
  });
  it('Testa se o retorno da rota GET de /users tem as propriedades corretas', async () => {
    const res = await chai.request(app).get('/users/');
    expect(res.body[0]).to.have.property('id');
    expect(res.body[0]).to.have.property('name');
  });
});



