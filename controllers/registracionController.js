let database = require("../database/models/index");
let op = database.Sequelize.Op;
let bcrypt = require("bcryptjs");
const app = require('../app');

let registracionController = {
    registrar: function(req, res, next) {
        // conexion.startConection();
        res.render("registracion", {
            nombre: req.body.nombre
            
        })
    },
    renderView: function(req, res, next){
        res.render("regOk")
    }    
}

module.exports = registracionController;