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
        tableName: "Comentarios",
        timestamps: false
    };


    const comentarios = sequelize.define(alias, cols, config);
    comentarios.associate = function (models) {
        comentarios.belongsTo(posteos,{
            as: "Posteos",
            foreignKey: "posteos_id",
        })
    }


    return comentarios;
}