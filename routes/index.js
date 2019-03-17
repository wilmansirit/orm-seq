'use strict'

const 	express		= require('express')
,		router 		= express.Router()
,		controllers = require('../controllers')



router.get('/users', controllers.appControllers.index)




module.exports = router;