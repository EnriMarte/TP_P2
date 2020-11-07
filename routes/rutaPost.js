var express = require('express');
var router = express.Router();
let postController = require("../controllers/postController")

/* GET home page. */
router.get('/', postController.detallePost);

router.get('/agregar', postController.renderPost)
router.post('/agregar', postController.agregarPost)


router.get('/detalle', postController.detallePost)



module.exports = router;
