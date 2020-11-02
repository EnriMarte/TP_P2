let db = require("../database/models")
let op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");


let userController = {
    login: function (req, res, next) {
        res.render("login")
    },
    registrar: function(req, res, next) {
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("/user/perfil");
        }

        res.render("registracion");
    },
    storeUser: function (req, res, next){
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("/movies");
        }

        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let username = req.body.username;
        let fecha = req.body.fecha;
        let email = req.body.email;
        let password = bcrypt.hashSync(req.body.password, 10);
        let telefono = req.body.telefono;

        let user = {
            nombre: nombre,
            apellido: apellido,
            nombreUser: username,
            fechaNacimiento: fecha,
            mail: email,
            password: password,
            telefono: telefono
        }

        db.Usuarios.create(user)
        .then(function() {
            res.redirect("perfil");
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