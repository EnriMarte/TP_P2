let usuarioController = {
    detalle: function (req, res, next) {
        res.render("detalleUsuario")
    },
    user: function (reqq, res, next) {
       res.render("detalleUsuario") 
    }
}

module.exports = usuarioController;