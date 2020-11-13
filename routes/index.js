var express = require('express');
var router = express.Router();
let db = require("../database/models")

  /* GET home page. */
  router.get('/', function(req, res, next) {
      db.posteos.findAll({
        include:[
          { all: true , nested: true }
      ]
      }).then(function(dataAll) {
    //res.send(dataAll)
    res.render("index" ,{dataAll: dataAll});
    })
});

module.exports = router;
