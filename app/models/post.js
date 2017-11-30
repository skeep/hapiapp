'use strict';
module.exports = function(sequelize, DataTypes) {
  const post = sequelize.define('post', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    categories: DataTypes.TEXT,
    content: DataTypes.STRING,
    user_id: { type: Sequelize.INTEGER, references: user, referencesKey: "id" }
  }, {
    classMethods: {
      associate: function(models) {
        post.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        });
      }
    }
  });
  return post;
};