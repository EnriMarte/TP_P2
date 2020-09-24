var express = require('express');
var router = express.Router();
let registracionController = require('../controllers/registracionController');

/* GET home page. */
router.get('/', registracionController.registrar)

module.exports = router;
