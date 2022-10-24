// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const Category = require('./Category');
// const Quiz = require('./Quiz');
// const User = require('./User');
// const Score = require('./Score');

// class UserScore extends Model {};

// UserScore.init (
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: User,
//                 key: 'id'
//             }
//         },
//         quiz_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: Quiz,
//                 key: 'id'
//             },
//             onDelete: 'CASCADE'
//         },
//         score_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: Score,
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: true,
//         freezeTableName: false,
//         underscored: true,
//         modelName: 'user_score',
//     },
// )

// module.exports = UserScore