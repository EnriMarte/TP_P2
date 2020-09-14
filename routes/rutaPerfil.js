var express = require('express');
var router = express.Router();
let perfilController = require("../controllers/perfilController");


/* GET home page. */
router.get('/', perfilController.mostrarPerfil);


module.exports = router;
