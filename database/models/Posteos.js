module.exports = (sequelize, DataTypes) => {
    let alias = "posteos";

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
        tableName: "posteos",
        timestamps: false
    };

    const posteos = sequelize.define(alias, cols, config);

    posteos.associate = function(models) {
        posteos.hasMany(models.comentarios, {
            as: "comentarios",
            foreignKey: "posteos_id",
        });     
    }
    posteos.associate = function(models) {
        posteos.belongsTo(models.usuarios, {
            as: "usuarios",
            foreignKey: "usuarios_id",
        });     
    }
    return posteos;
}