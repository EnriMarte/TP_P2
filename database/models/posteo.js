const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = "Posteos";

    let cols = {
        id: {
            data: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: {
            data: dataTypes.INTEGER,
            foreignKey: true,
        },
         urlImagen:{
            data: dataTypes.STRING
        },
        txtPost:{
            data: dataTypes.STRING
        },
        fechaCreacion: {
            data: dataTypes.DATETIME
        }
    };

    let config = {
        tableName: "Posteos",
        timestamps: false
    };


    const posteos = sequelize.define(alias, cols, config);
    posteos.associate = function (models) {
        posteos.hasMany(comentarios,{
            as: "Comentarios",
            foreignKey: "comentarios_id",
        })
    }

    return posteos;
}