let database = require("../database/models/index");
let op = database.Sequelize.Op;

let perfilController = {
    mostrarPerfil: function(req, res, next) {
        res.render("miPerfil")
      },
    mostrarModPerfil: function(req, res, next) {
        res.render("modificarPerfil")
      },
}

module.exports = perfilController;