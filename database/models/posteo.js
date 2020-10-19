const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = "posteos";

    let cols = {
        id: {
            data: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: {
            data: dataTypes.INTEGER
        },
         urlImagen:{
            data: dataTypes.STRING
        },
        txtPost:{
            data: dataTypes.STRING
        },
        fechaCreacion: {
            data: dataTypes.DATE 
        }
    };

    let config = {
        tableName: "posteos",
        timestamps: false
    };


    const posteos = sequelize.define(alias, cols, config);
    return posteos;
}