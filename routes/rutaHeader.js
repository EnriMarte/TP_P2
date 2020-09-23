var express = require('express');
var router = express.Router();
let headerController = require('../controllers/headerController')

/* GET home page. */
router.get('/', headerController.deslogueadoHeader) 

router.get('/', headerController.logueadoHeader) 

module.exports = router;
