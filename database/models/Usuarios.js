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
    
    // usuarios.associate = function(models) {
    //     usuarios.hasMany(models.Posteos, {
    //         as: "posteos",
    //         foreignKey: "usuarios_id",
    //     });     
    // }
    return usuarios;
}