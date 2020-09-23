var express = require('express');
var router = express.Router();
let usuarioController = require('../controllers/usuarioController')

/* GET home page. */
router.get('/', usuarioController.detalle) 

router.get('/', usuarioController.user)

module.exports = router;
