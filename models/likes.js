
module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define('likes', {
    like: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return likes;
};
