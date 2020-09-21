let headerController = {
    deslogueadoHeader: function(req, res, next) {
        res.render("headerDeslogueado")
      },
    logueadoHeader: function(req, res, next) {
        res.render("headerLogueado")
      },
}

module.exports = headerController;