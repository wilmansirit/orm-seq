'use strict'

const 	express		= require('express')
,		router 		= express.Router()
,		controllers = require('../controllers')



router.get('/', controllers.appControllers.index)




module.exports = router;