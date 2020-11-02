let db = require("../database/models")
let op = db.Sequelize.Op;

let userController = {
    login: function (req, res, next) {
        res.render("login")
    },
    registrar: function(req, res, next) {
        // conexion.startConection();
        res.render("registracion", {
            nombre: req.body.nombre
            
        })
    },
    regOk: function(req, res, next){
        res.render("regOk")
    },
    perfil: function(req, res, next){
        res.render("miPerfil")
    },
    search: function(req, res) {
        let buscandoUsuario = req.query.buscador;

        db.Usuarios.findAll(
            {
                where: [
                    { nombre: { [op.like]: "%" + buscandoUsuario + "%"} }
                ],
                order: ["nombre"],
                //limit: 2
            }
        )
        .then(function(usuarios) {
            res.render("resultadoBusqueda", {usuarios: usuarios});
        })
    }
}

module.exports = userController;