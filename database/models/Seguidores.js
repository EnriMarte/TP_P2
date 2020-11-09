module.exports = (sequelize, DataTypes) => {
    let alias = "seguidores";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idSeguidor: DataTypes.INTEGER,
        idSeguido:  DataTypes.INTEGER 
    };

    let config = {
        tableName: "seguidores",
        timestamps: false
    };

    const seguidores = sequelize.define(alias, cols, config);

    seguidores.associate = function(models) {
        seguidores.belongsTo(models.usuarios, {
            as: "usuarioSeguidor",
            foreignKey: "id",
        });
        seguidores.belongsTo(models.usuarios, {
            as: "usuarioSeguido",
            foreignKey: "id",
        });          
    }
    return seguidores;
}