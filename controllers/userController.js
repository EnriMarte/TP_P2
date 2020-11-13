let db = require("../database/models")
let op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");
let usuario;
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
        // let error = req.("Error")
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
            if (usuario == null) {
                let errors = "Reingresa el nombre de usuario"
                
                res.render("login", {errors: errors})
                
            } else if (bcrypt.compareSync(req.body.password, usuario.password) == false) {
                
                res.render("login")
            } else {
                req.session.usuarioLogueado = usuario;
                
                res.redirect("Perfil/" + usuario.id);
                // Todo bien!
            }
        })
        
    },
    olvideContra: function (req, res, next) {
      res.render("olvidePassword")
        
    },
    changePass: function(req, res){
        usuario = req.body.nombre
        let pregunta = req.body.pregunta
        let rta = req.body.rta
        db.usuarios.findOne(
            {
                where: [
                    { nombreUser: usuario },
                    
                ]
            }).then(function(usuario){
                if(usuario == undefined){
                    res.send("escribi bien")
                }
                else if(usuario.pregunta == pregunta && usuario.respuesta == rta){
                    res.render("modificarPass", {usuario: usuario})  
                }else{
                    
                    res.send(usuario)
                }
            })
    },
    ejecutaPass: function(req, res){
        let password = bcrypt.hashSync(req.body.password, 10);


        db.usuarios.update({password: password}, { 
            where: {
                nombreUser: usuario               
            }
        })
        .then(function() {
            res.render("index");
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
        let pregunta = req.body.pregunta;
        let respuesta = req.body.respuesta;

        let user = {
            nombre: nombre,
            apellido: apellido,
            nombreUser: username,
            fechaNacimiento: fecha,
            mail: email,
            password: password,
            telefono: telefono,
            fotoPerfil: fotoPerfil,
            pregunta: pregunta,
            respuesta: respuesta,
            
        }
        db.usuarios.findOne(
            {
                where: [
                    { nombreUser: username },
                    
                ]
            }
        ).then(function(usuario){
            console.log(usuario);
            if(usuario == null){
                
                db.usuarios.create(user)
                .then(function() {
                    res.redirect("/user/login");
                })
            }else{
                res.send("El usuario esta repe")

            }
        })

    },
    regOk: function(req, res, next){
        res.render("regOk")
    },
    perfil: function(req, res, next){
        if (req.session.usuarioLogueado == undefined) {
            res.render("index");
        }
        let idUsuarioAMostrar = req.params.id
        
        db.usuarios.findOne(
            {
                where: [
                    { id: idUsuarioAMostrar },
                    
                ],
                include: [ 
                    {
                        association: "seguidoress"
                    },
                    {
                        association: "posteos"
                    },
                    {
                        association: "seguido"  
                    }
                ]
            }
        )
        .then(function(usuario) {
           // res.send(usuario)
          res.render("miPerfil" ,{usuario: usuario});
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
    },
    follow: function(req, res){
        res.render("home")
    },
    altaFollow: function(req, res){
        let idUsuario = req.params.id
        let idUsuarioSession = req.session.usuarioLogueado.id

        let regFollow = {
            idSeguidor: idUsuarioSession,
            idSeguido: idUsuario
        }

        db.seguidores.findAll(
            {
                where: [
                    { idSeguidor: idUsuarioSession },
                    
                ]
            }
        ).then(function(usuario){
                db.seguidores.create(regFollow)
                .then(function() {
                    res.redirect("/user/perfil/" + idUsuario);
                })

    })
    },   
    bajaFollow: function(req, res){
        let idUsuario = req.params.id
        
        db.seguidores.findOne({
            where: {
                idSeguidor: req.session.usuarioLogueado.id,
                idSeguido: idUsuario
            }
        }).then(function(usuario){
            db.seguidores.destroy({ 
                where: {
                    id: usuario.id               
                }
            })
            .then(function() {
                res.redirect("/user/perfil/" + idUsuario);
            })
        })

    }
}
module.exports = userController;