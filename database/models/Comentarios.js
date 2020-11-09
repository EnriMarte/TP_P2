module.exports = (sequelize, DataTypes) => {
    let alias = "comentarios";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idPost: DataTypes.INTEGER,
        idUsuario: DataTypes.INTEGER, 
        txtComentario: DataTypes.STRING,
        fechaComent: DataTypes.DATE,
    };

    let config = {
        tableName: "comentarios",
        timestamps: false
    };

    const comentarios = sequelize.define(alias, cols, config);

    comentarios.associate = function(models) {
        comentarios.belongsTo(models.posteos, {
            as: "posteos",
            foreignKey: "idPost",
        });
        comentarios.belongsTo(models.usuarios, {
            as: "usuarios",
            foreignKey: "idUsuario",
        });
    
    }
   

    return comentarios;
}