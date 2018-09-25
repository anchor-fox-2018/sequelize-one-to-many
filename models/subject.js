'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: DataTypes.TEXT
  }, {});
  Subject.associate = function(models) {
    // HAS MANY
    Subject.hasMany(models.Teacher)
  };
  return Subject;
};