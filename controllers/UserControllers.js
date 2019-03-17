'use strict'

const 	model 		= require('../models')			


module.exports = {


	index	:	async (req, res, next) => {

						let data = await model.User.findAll();						
						data = JSON.stringify(data, null, 4);
						data = JSON.parse(data)
						console.log(data);
						res.render('index', {users: data});

				},
}

