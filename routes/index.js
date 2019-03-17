'use strict'

const 	express		= require('express')
,		router 		= express.Router()
,		controllers = require('../controllers')



router.get('/users', controllers.UserControllers.index)




module.exports = router;