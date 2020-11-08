let db = require("../database/models")
let op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");

let userController = {
    login: function (req, res, next) {
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("perfil");
            
        }
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
                
                res.redirect("Perfil/" + usuario.id);
                // Todo bien!
            }
        })

    },
    registrar: function(req, res, next) {
        if (req.session.usuarioLogueado != undefined) {
            res.redirect("perfil/" + req.session.usuarioLogueado.id);
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
        let fotoPerfil = req.body.fotoPerfil;

        let user = {
            nombre: nombre,
            apellido: apellido,
            nombreUser: username,
            fechaNacimiento: fecha,
            mail: email,
            password: password,
            telefono: telefono,
            fotoPerfil: fotoPerfil
        }

        db.usuarios.create(user)
        .then(function() {
            res.redirect("/");
        })
    },
    regOk: function(req, res, next){
        res.render("regOk")
    },
    perfil: function(req, res, next){
        let idUsuarioAMostrar = req.params.id
        db.usuarios.findOne(
            {
                where: [
                    { id: idUsuarioAMostrar },
                    
                ]
            }
        )
        .then(function(usuario) {
            db.posteos.findAll(
                {
                    where: [
                        { idUsuario: idUsuarioAMostrar },
                    ]
                }
            )
            .then(function(posteo){
            res.render("miPerfil" ,{usuario: usuario, posteo: posteo});
            })
        })
        
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
    },
    cerrarSes: function(req, res){
        req.session.usuarioLogueado = undefined;
        
        res.redirect("/");
    },
    edit: function(req, res) {
        let usuarioModificar = req.session.usuarioLogueado

        res.render("modificarPerfil", {usuarioModificar: usuarioModificar});
    },
    modify: function(req, res){
        let idUser = req.session.usuarioLogueado.id
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let nombreUser = req.body.username;
        let mail = req.body.email;
        let password2 = bcrypt.hashSync(req.body.password, 10);
        let telefono = req.body.telefono;
        let fotoPerfil = req.body.fotoPerfil;


        let usEdi = {
            nombre: nombre,
            apellido: apellido,
            nombreUser: nombreUser,
            mail: mail,
            password: password2,
            telefono: telefono,
            fotoPerfil: fotoPerfil
        }

        db.usuarios.update(usEdi, { 
            where: {
                id: idUser               
            }
        })
        .then(function() {
            res.render("index");
         })
    }
}

module.exports = userController;