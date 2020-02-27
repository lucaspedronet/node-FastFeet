import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        sector: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.NUMBER,
        complement: Sequelize.STRING
      },
      { sequelize }
    );
    return this;
  }
}

export default Recipient;
