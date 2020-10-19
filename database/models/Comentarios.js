const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = "Comentarios";

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
        idPost: {
            data: dataTypes.INTEGER,
            foreignKey: true,
        },
        txtComentario: {
            data: dataTypes.STRING
        },
        fechaComent: {
            data: dataTypes.DATETIME
        },

    };

    let config = {
        tableName: "comentarios",
        timestamps: false
    };


    const comentarios = sequelize.define(alias, cols, config);
    return comentarios;
}