const FilmSubmissionSchema = (sequelize, DataTypes) => {
  const FilmSubmissionTable = sequelize.define('FilmSubmission', {
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
    sub_name: DataTypes.STRING(200),
    sub_email: DataTypes.STRING(100),
    sub_phone: DataTypes.STRING(14),
  },
  {
    tableName: 'films_submissions',
    underscored: true,
    timestamps: false
  });
   return FilmSubmissionTable;
};

module.exports = FilmSubmissionSchema;