const { query } = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tp2_prog"
});


let conexion = { 
    startConection: function(req, res, next) {
        con.connect(function(err) {
         if (err) throw err;
        console.log("Connected!");
        for (let index = 8; index < 57; index++) {
            var sql = "INSERT INTO comentarios (idPost, idUsuario, txtComentario, fechaComent) VALUES ('"+ index +"', '7','Este es un comentario del usuario" + index + "', '2020-09-27')";
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
        }
        });
}}
// conexion.startConection();
module.exports = conexion