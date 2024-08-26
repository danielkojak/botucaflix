const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
const userService = require('../../src/services/user.service')
const { getAllUsers } = require('../../src/controllers/user.controller');

chai.use(sinonChai);

describe('****CONTROLLERS**** > USER CONTROLLER', () => {
  let res;

  beforeEach(() => {
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };
  });

  it('Deve retornar a lista de usuários com status 200', async () => {
    const mockUsers = [{
      id: 1,
      name: 'John Doe',
      email: 'john@document.com',
      birthday: '2021-12-03 00:00:00',
      password: 'senha4321'
     }];
    
    sinon.stub(userService, 'getAll').resolves(mockUsers);

    const req = {};

    await getAllUsers(req, res);

    expect(userService.getAll).to.have.been.calledOnce;
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockUsers);

    userService.getAll.restore();
  });
});
