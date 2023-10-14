const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const User = sequelize.define('BlogDetails', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    BlogTitle: Sequelize.STRING,
    BlogAuthor: {
        type: Sequelize.STRING,
        unique: true,
    },
    BlogCotent: {
        type: Sequelize.STRING,
        unique: true,
    }
})

module.exports = User;