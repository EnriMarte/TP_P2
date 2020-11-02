let bcrypt = require("bcryptjs");
let database = require("../database/models/index");
let op = database.Sequelize.Op;

let loginController = {
    login: function (req, res, next) {
        res.render("login")
    }
}
module.exports = loginController