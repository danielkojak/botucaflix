const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    birthday: DataTypes.DATEONLY,
    password: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });
   return UserTable;
};

module.exports = UserSchema;