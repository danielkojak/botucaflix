module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING(4)
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true
      },
      poster_link: {
        type: Sequelize.STRING,
        allowNull: true
      },
      trailer_link: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image_1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image_2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image_3: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image_4: {
        type: Sequelize.STRING,
        allowNull: true
      },
      synopsis: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cast: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      crew: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      parental_rating: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categories: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};