var express = require('express');
var router = express.Router();
let regist = require("../controllers/registracionController");



/* GET home page. */
router.get('/', regist.renderView);


module.exports = router;
