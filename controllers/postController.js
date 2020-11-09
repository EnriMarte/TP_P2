let db = require("../database/models")
let op = db.Sequelize.Op;

let postController = {
    renderPost: function(req, res, next) {
        res.render("agregarPost")
      },
    agregarPost: function(req, res, next) {

    let urlImg = req.body.url;
    let desc = req.body.comentario;
    
    let post = {
        idUsuario: req.session.usuarioLogueado.id,
        urlImagen: urlImg,
        txtPost: desc
      }

    db.posteos.create(post)
    .then(function() {
        res.redirect("/");
    })
      },

    detallePost: function(req, res, next) {

      let idPosteoAMostrar = req.params.id
      db.posteos.findOne(
          {
              where: [
                  { id: idPosteoAMostrar },
                  
              ]
          }
      )
      .then(function(posteo) {
          db.usuarios.findOne(
              {
                  where: [
                      { id: idPosteoAMostrar },
                  ]
              }
          )
          .then(function(usuario){
          res.render("detallePost" ,{usuario: usuario, posteo, posteo});
          })
      })
      
        }
};

module.exports = postController;