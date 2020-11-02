module.exports = (sequelize, DataTypes) => {
    let alias = "comentarios";

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
        tableName: "comentarios",
        timestamps: false
    };

    const comentarios = sequelize.define(alias, cols, config);

    comentarios.associate = function(models) {
        comentarios.belongsTo(models.posteos, {
            as: "posteos",
            foreignKey: "posteos_id",
        });     
    }
   

    return comentarios;
}