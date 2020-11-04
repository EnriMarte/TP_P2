let db = require("../database/models")
let op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");


let userController = {
    login: function (req, res, next) {
        res.render("login")
    },
    processLogin: function(req, res, next){
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("perfil");
        }

        // findAll retorna SIEMPRE un array. Si no matchean los datos findAll traer un array vacío pero SIEMPRE trae un array
        // findOne en cambio tiene dos opciones. O trae el dato, o trae null.
        db.usuarios.findOne(
            {
                where: [
                    { nombreUser: req.body.username },
                    
                ]
            }
        )
        .then(function(usuario) {
            console.log(bcrypt.compareSync(req.body.password, usuario.password));
            if (usuario == null) {
                res.send("El mail no existe")
            } else if (bcrypt.compareSync(req.body.password, usuario.password) == false) {
                res.send("Mala contraseña")
            } else {
                req.session.usuarioLogueado = usuario;

                res.redirect("Perfil");
                // Todo bien!
            }
        })

    },
    registrar: function(req, res, next) {
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("perfil");
        }

        res.render("registracion");
    },
    storeUser: function (req, res, next){
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("/register");
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

        db.usuarios.create(user)
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

        db.usuarios.findAll(
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