'use strict'

const 	User		= require('../models').User

module.exports = {

	index	:	async (req, res, next) => {

						let data = await User.findAll();						
						data = JSON.stringify(data, null, 4);
						// data = JSON.parse(data)
						// console.log(data);
						res.render('index', {users: data});

				},
}

