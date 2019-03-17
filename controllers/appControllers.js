'use strict'

const 	User 		= require('../models/User')			


module.exports = {


	index	:	(req, res, next) => {

				User.findAll()
					.catch(console.error)
					.then(data => {
						res.render('index', {users: JSON.stringify(data, null, 4)})
					})
				},
}

