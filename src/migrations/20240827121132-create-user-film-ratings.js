module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_film_ratings', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      filmId: {
        type: Sequelize.INTEGER,
        field: 'film_id',
        references: {
          model: 'films',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_film_ratings');
  }
};