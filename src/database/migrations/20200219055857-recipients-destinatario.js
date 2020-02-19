module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('destinatario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cep: {
        type: Sequelize.STRING(7),
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface) => queryInterface.dropTable('users')
};
