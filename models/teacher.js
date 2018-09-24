'use strict';
module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('Teacher', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email'
                }
            }
        },
        SubjectId: DataTypes.INTEGER
    }, {});
    Teacher.associate = function(models) {
        Teacher.belongsTo(models.Subject)
    };
    return Teacher;
};