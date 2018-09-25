'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // BELONGS TO
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};