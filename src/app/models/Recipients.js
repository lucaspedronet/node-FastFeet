import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cep: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        setor: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.NUMBER,
        complemento: Sequelize.STRING
      },
      { sequelize }
    );
    return this;
  }
}

export default Recipient;
