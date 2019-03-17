'use strict'

require('dotenv').config();

const Sequelize = require('sequelize')
	

const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DDBB_USER,
	process.env.DDBB_PASS,
	{
		host	: 'localhost',
		dialect	: 'mysql',
		pool	: {
			max		: 50,
			min		: 0,
			adquire	: 30000,
			idle	: 10000
		}
	}
);


module.exports = sequelize;

// sequelize
// 	.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully.');
// 	})
// 	.catch(err => {
// 		console.error('Unable to connect to the database:', err);
// 	});