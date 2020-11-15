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

        seguidores.belongsToMany(models.usuarios, {
            as: "usuarioSeguidores",
            through: "usuarios",
            foreignKey: "id",
            otherKey: "id",
            timestamps: false
        });    
        seguidores.belongsTo(models.usuarios, {
            as: "usuarioSeguidos",
            through: "usuarios",
            foreignKey: "id",
            otherKey: "id",
            timestamps: false
        });   
        seguidores.belongsTo(models.posteos, {
            as: "posteoss",
            foreignKey: "id"
        });    

    }
    return seguidores;
}