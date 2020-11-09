var express = require('express');
var router = express.Router();
let postController = require("../controllers/postController")

/* GET home page. */

router.get('/agregar', postController.renderPost)
router.post('/agregar', postController.agregarPost)

router.get('/:id', postController.detallePost);


module.exports = router;
