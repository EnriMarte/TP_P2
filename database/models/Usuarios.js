const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";

    let cols = {
        id: {
            data: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            data: dataTypes.STRING
        },
        apellido: {
            data: dataTypes.STRING
        },
        nombreUser: {
            data: dataTypes.STRING
        },
        fechaNacimiento: {
            data: dataTypes.DATE
        },
        mail:{
            data: dataTypes.STRING
        },
        password:{
            data: dataTypes.STRING
        },
        telefono: {
            data: dataTypes.INTEGER 
        }

    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };


    const usuarios = sequelize.define(alias, cols, config);
    return usuarios;
}