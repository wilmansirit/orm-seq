'use strict'

module.exports = {


	index	:	(req, res, next) => {

					res.status(200)
					res.send('Hola desde el controlador');

				}



}