module.exports = (sequelize, DataTypes) => {
    let alias = "posteos";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: DataTypes.INTEGER,
        urlImagen:  DataTypes.STRING, 
        txtPost: DataTypes.STRING,
        fechaCreacion: DataTypes.DATE,
    };

    let config = {
        tableName: "posteos",
        timestamps: false
    };

    const posteos = sequelize.define(alias, cols, config);

    posteos.associate = function(models) {
        posteos.hasMany(models.comentarios, {
            as: "comentarios",
            foreignKey: "txtComentario",
        });     
        posteos.belongsTo(models.usuarios, {
            as: "usuarios",
            foreignKey: "idUsuario",
        });  
    }
    return posteos;
}