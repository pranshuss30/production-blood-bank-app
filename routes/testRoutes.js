const express=require('express')
const { testController } = require('../controllers/testControllers')
//router object
const router=express.Router();
//routes
router.get('/',testController)
module.exports = router;