let postController = {
    agregarPost: function(req, res, next) {
        res.render("agregarPost")
      },
    detallePost: function(req, res, next) {
        res.render("detallePost")
      },
};

module.exports = postController;