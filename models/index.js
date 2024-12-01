const { Sequelize, DataTypes } = require('sequelize');
const Livros = require('./Livros');
const Usuario = require('./Usuario');
const Emprestimo = require('./Emprestimo');

// Configura a conexão com o banco de dados
const sequelize = new Sequelize('seu_banco_de_dados', 'seu_usuário', 'sua_senha', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Importa os modelos
db.Livros = require('./Livros')(sequelize, DataTypes);
db.Usuario = Usuario(sequelize, Sequelize.DataTypes);
db.Emprestimo = Emprestimo(sequelize, Sequelize.DataTypes);

// Define associações (se necessário)
db.Usuario.hasMany(db.Emprestimo, { foreignKey: 'usuarioId' });
db.Livros.hasMany(db.Emprestimo, { foreignKey: 'livroId' });
db.Emprestimo.belongsTo(db.Usuario, { foreignKey: 'usuarioId', onDelete: 'SET NULL' });
db.Emprestimo.belongsTo(db.Livros, { foreignKey: 'livroId', onDelete: 'SET NULL' });


module.exports = db;


