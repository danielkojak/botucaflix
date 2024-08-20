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
  describe('Testa se rota GET de /users mostra todos os usuários', async () => {
    let getUser;

    console.log('aqui1', app)

    try {
      console.log('aqui2');
      getUser = await chai.request(app).get('/users/');
    } catch (error) {
      console.log('Deu ruim', error);
    }

    console.log('aqui3');

    ;
    
    })

/*     it('retorna status 200', async () => {
      const { status } = getUser;

      expect(status).to.be.equals(200);
    }); */

  });