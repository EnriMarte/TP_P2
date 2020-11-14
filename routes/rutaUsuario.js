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

router.get("/olvideContra", userController.olvideContra);
router.post("/olvideContra", userController.changePass);

router.post("/changePass", userController.ejecutaPass);


router.get("/follow", userController.follow);
router.post("/follow/:id", userController.altaFollow);

router.post("/unfollow/:id", userController.bajaFollow);

router.get("/cerrarSes", userController.cerrarSes);


router.get('/regok', userController.regOk);

router.get('/perfil/mifeed', userController.mifeed);

router.get('/perfil/:id', userController.perfil);



router.get('/search', userController.search);

router.get('/modificar', userController.edit);
router.post('/modificar', userController.modify);






module.exports = router;
