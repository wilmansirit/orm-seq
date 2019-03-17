'use strict'

const database = require('../database');
const Sequelize = require('sequelize')


const User = database.define('users', {
	cedula: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	nombres: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

// User.findAll()
// 	.then(users => console.log("All users:", JSON.stringify(users, null, 4)));

module.exports = User;