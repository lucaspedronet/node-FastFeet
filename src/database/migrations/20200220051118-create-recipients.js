module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
        trim: true
      },
      cep: {
        type: Sequelize.STRING(7),
        allowNull: true
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      setor: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      complemento: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => queryInterface.dropTable('recipients')
};
