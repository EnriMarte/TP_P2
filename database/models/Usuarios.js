module.exports = (sequelize, DataTypes) => {
    let alias = "usuarios";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: DataTypes.STRING,
        apellido:  DataTypes.STRING, 
        nombreUser: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATE,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        fotoPerfil: DataTypes.STRING,
        pregunta: DataTypes.STRING,
        respuesta: DataTypes.STRING,
    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    const usuarios = sequelize.define(alias, cols, config);
    
    usuarios.associate = function(models) {
        usuarios.hasMany(models.posteos, {
            as: "posteos",
            foreignKey: "idUsuario",
        });     
        usuarios.belongsToMany(models.seguidores, {
            as: "seguidoress",
            through: "seguidores",
            foreignKey: "idSeguidor",
            otherKey: "id",
            timestamps: false
        });
        usuarios.belongsToMany(models.seguidores, {
            as: "seguido",
            through: "seguidores",
            foreignKey: "idSeguido",
            otherKey: "id",
            timestamps: false
        });         
    }
    return usuarios;
}