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
    models.FilmTable.belongToMany(models.UserTable,
      {
        as: 'users',
        through: UserFilmRatingTable,
        foreignKey: 'filmId',
        otherKey: 'userId'
      }
    );

    models.UserTable.belongToMany(models.FilmTable,
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