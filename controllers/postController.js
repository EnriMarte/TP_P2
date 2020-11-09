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
                  
              ], include: [
                  { all: true , nested: true }
              ]
          }
      )
      .then(function(posteo) {
        res.render("detallePost" ,{posteo: posteo});
        })
        },

    commentPost: function(req, res, next) {
      let tComentario = req.body.txtcomentario;

      let post = {
        idPost: req.body.id,
        idUsuario: req.session.usuarioLogueado.id,
        txtComentario: tComentario,
        
      }

      db.comentarios.create(post)
      .then(function() {
        res.redirect("/post");
      })

       },

};

module.exports = postController;