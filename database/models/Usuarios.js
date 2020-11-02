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
        tableName: "Usuarios",
        timestamps: false
    };


    const usuarios = sequelize.define(alias, cols, config);
    usuarios.associate = function (models) {
        usuarios.hasMany(posteos,{
            as: "Usuarios",
            foreignKey: "usuarios_id",
        })
    }
    return usuarios;
}