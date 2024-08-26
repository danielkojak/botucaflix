// test/film.test.js
const chai = require('chai');
const { expect } = chai;
const { User } = require('./setup');
const { userToInsert } = require('./mocks/mockModel')



describe('****MODELS**** > USER MODEL', () => {
  it('Testa criação de novo usuário', async () => {
    const user = await User.create(userToInsert);

    expect(user).to.have.property('name').to.equal('Maria Cecília');
    expect(user).to.have.property('email').to.equal('ma.ci.1990@uol.com.br');
    expect(user).to.have.property('birthday').to.equal('1990-08-23');
    expect(user).to.have.property('password').to.equal('mariazinha123');
  });

   it('Testa se criação de usuário falha quando há campos não preenchidos', async () => {
    try {
      await User.create({});
    } catch (error) {
      expect(error.errors[0].message).to.equal('notNull Violation: User.name cannot be null');
    }
  });

  it('Testa se consegue atualizar dados do usuário', async () => {
    const user = await User.create(userToInsert);

    await user.update({ password: 'm@r!@z!n#@123' });

    const updatedUser = await User.findByPk(user.id);
    expect(updatedUser.password).to.equal('m@r!@z!n#@123');
  });

  it('Testa função de deletar o usuário', async () => {
    const user = await User.create(userToInsert);

    await user.destroy();
    const deletedUser = await User.findByPk(user.id);
    expect(deletedUser).to.be.null;
  });
 });
