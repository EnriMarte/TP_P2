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
      // if (req.session.usuarioLogueado == undefined) {
      //   res.redirect("/user/login");
      // }
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
        //res.send(posteo);
        res.render("detallePost" ,{posteo: posteo});
        })
      },    
     eliminarPost: function(req, res, next) {
      let idPosteoAMostrar = req.params.id

      db.comentarios.destroy({ 
        where: {
            idPost: idPosteoAMostrar               
        }
        }) 
        .then(function() {
          db.posteos.destroy({
            where: {
              id: idPosteoAMostrar               
          }})
          .then(function() {
            res.redirect("/user/perfil/" + req.session.usuarioLogueado.id);
          })
        })




      },
     modifyRender: function(req, res){
      let id = req.params.id
      db.posteos.findOne({
        where: [
          {
            id: id
          }
        ]
      }).then(function(posteo){
         if (req.session.usuarioLogueado.id != posteo.dataValues.idUsuario) {
          res.redirect("/post/"+ posteo.dataValues.id)
         } 
  
        res.render("modificarPost", {posteo: posteo})
      })
      },
     edit: function(req, res, next) {
      let idPost = req.params.id
      let tComentario = req.body.comentario
      let url = req.body.url

      let nuevoPost = {
        idUsuario: req.session.usuarioLogueado.id,
        urlImagen: url,
        txtPost: tComentario,
      }
      db.posteos.update(nuevoPost,{
        where: [{
          id: idPost
        }]
      }).then(function(){
        res.redirect("/post/"+ idPost)
      })

      },
     commentPost: function(req, res, next) {
        let tComentario = req.body.coment;
        let idParam = req.params.id;
  
        let post = {
          idPost: idParam,
          idUsuario: req.session.usuarioLogueado.id,
          txtComentario: tComentario,
        }
        db.comentarios.create(post)
        .then(function() {
          res.redirect("/post/" + idParam);
        })
  
      },
};

module.exports = postController;