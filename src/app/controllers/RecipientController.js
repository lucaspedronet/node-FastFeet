import Recipient from '../models/Recipients';
import User from '../models/User';

class RecipientController {
  async store(req, res) {
    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name }
    });
    if (recipientExists) {
      return res.status(401).json({ error: 'Recipient already exists' });
    }
    const { name, cep, cidade, estado, setor, numero } = await Recipient.create(
      req.body
    );
    return res.json({
      name,
      cep,
      cidade,
      estado,
      setor,
      numero
    });
  }

  async update(req, res) {
    const { name } = req.body;
    const recipient = await Recipient.findOne({ where: { name } });
    const { provider } = await User.findByPk(req.userId);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient already exists' });
    }

    if (!provider)
      return res.status(401).json({ error: 'Provider not permission' });

    if (name && name === recipient.name) {
      return res
        .status(401)
        .json({ error: `Recipient is ${name} already exists` });
    }
    const { cep, cidade, estado, rua, setor, numero } = await recipient.update(
      req.body
    );
    return res.json({ name, cep, cidade, estado, rua, setor, numero });
  }
}
export default new RecipientController();
