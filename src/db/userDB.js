const conn = require('./connection');

const insert = (user) => conn.execute(
  `INSERT INTO user
    (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [user.firstName, user.lastName, user.email, user.phone],
    );

const findAll = () => conn.execute('SELECT * FROM user');

const findById = (id) => conn.execute('SELECT * FROM user WHERE id = ?', [id]);

const update = (user, id) => conn.execute(
  `UPDATE user 
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [user.firstName, user.lastName, user.email, user.phone, id],
);

const remove = (id) => conn.execute('DELETE FROM user WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};