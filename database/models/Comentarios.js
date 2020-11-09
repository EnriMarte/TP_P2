module.exports = (sequelize, DataTypes) => {
    let alias = "comentarios";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: false
    };

    const comentarios = sequelize.define(alias, cols, config);

    comentarios.associate = function(models) {
        // comentarios.belongsTo(models.posteos, {
        //     as: "posteos",
        //     foreignKey: "posteos_id",
        // });     
    }
   

    return comentarios;
}