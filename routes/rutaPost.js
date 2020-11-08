var express = require('express');
var router = express.Router();
let postController = require("../controllers/postController")

/* GET home page. */
router.get('/:id', postController.detallePost);

router.get('/agregar', postController.renderPost)
router.post('/agregar', postController.agregarPost)


module.exports = router;
