module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false // Campo obrigatório
        },
        endereco: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
            unique: true // Email único
        },
        telefone: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Usuarios'
    });

    return Usuario;
};
