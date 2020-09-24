const conexion = require('./conectionController');

let registracionController = {
    registrar: function(req, res, next) {
        // conexion.startConection();
        res.render("registracion")
    }}

module.exports = registracionController;