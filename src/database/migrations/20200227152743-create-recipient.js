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
      zip_code: {
        type: Sequelize.STRING(7),
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      sector: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      street: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      number: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      complement: {
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
