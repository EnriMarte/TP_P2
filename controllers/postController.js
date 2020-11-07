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
        idUsuario: req.session.usuarioLogueado.idUsuario,
        urlImagen: urlImg,
        txtPost: desc
      }

    db.posteos.create(post)
    .then(function() {
        res.redirect("/");
    })
      },
    detallePost: function(req, res, next) {
        res.render("detallePost")
      },
};

module.exports = postController;