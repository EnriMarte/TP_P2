var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
router.get("/register", userController.registrar);
router.post("/register", userController.storeUser);

router.get("/login", userController.login);
router.post("/login", userController.processLogin);

router.get('/regok', userController.regOk)
router.get('/perfil', userController.perfil)
router.get('/search', userController.search)






module.exports = router;
