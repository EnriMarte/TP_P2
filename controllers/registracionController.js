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