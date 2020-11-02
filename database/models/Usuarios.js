module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";

    let cols = {

        nombre: DataTypes.STRING,
        apellido:  DataTypes.STRING, 
        nombreUser: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATE,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        telefono: DataTypes.INTEGER
    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };



    const usuarios = sequelize.define(alias, cols, config);

    return usuarios;
}