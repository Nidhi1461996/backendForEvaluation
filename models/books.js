
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    author: DataTypes.STRING,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return books;
};
