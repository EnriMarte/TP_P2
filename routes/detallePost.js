var express = require('express');
var router = express.Router();
let postController = require("../controllers/postController.js")

/* GET home page. */
router.get('/', postController.agregarPost);

module.exports = router;
