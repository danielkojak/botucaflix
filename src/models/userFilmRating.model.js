const UserFilmRatingSchema = (sequelize, DataTypes) => {
  const UserFilmRatingTable = sequelize.define('UserFilmRating', {
    rating: DataTypes.INTEGER,
  },
  {
    tableName: 'users_films_ratings',
    underscored: true,
    timestamps: false
  });

  UserFilmRatingTable.associate = (models) => {
    models.Film.belongsToMany(models.User,
      {
        as: 'users',
        through: UserFilmRatingTable,
        foreignKey: 'filmId',
        otherKey: 'userId'
      }
    );

    models.User.belongsToMany(models.Film,
      {
        as: 'films',
        through: UserFilmRatingTable,
        foreignKey: 'userId',
        otherKey: 'filmId'
      }
    );


  }

   return UserFilmRatingTable;
};

module.exports = UserFilmRatingSchema;