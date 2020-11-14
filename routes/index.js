var express = require('express');
var router = express.Router();
let db = require("../database/models")
let op = db.Sequelize;


  /* GET home page. */
  router.get('/', function(req, res, next) {
      db.posteos.findAll({
        include:[
          { all: true , nested: true }
      ],
      order:[ ['id', 'DESC']]
      }).then(function(dataAll) {
    //res.send(dataAll)
    res.render("index" ,{dataAll: dataAll});
    })
});

module.exports = router;
