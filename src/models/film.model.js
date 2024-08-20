const FilmSchema = (sequelize, DataTypes) => {
  const FilmTable = sequelize.define('Film', {
    name: DataTypes.STRING(200),
    year: DataTypes.STRING(4),
    duration: DataTypes.INTEGER,
    link: DataTypes.STRING,
    poster_link: DataTypes.STRING,
    trailer_link: DataTypes.STRING,
    image_1: DataTypes.STRING,
    image_2: DataTypes.STRING,
    image_3: DataTypes.STRING,
    image_4: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    cast: DataTypes.TEXT,
    crew: DataTypes.TEXT,
    parental_rating: DataTypes.STRING,
    categories: DataTypes.STRING,
  },
  {
    tableName: 'films',
    underscored: true,
    timestamps: false
  });
   return FilmTable;
};

module.exports = FilmSchema;