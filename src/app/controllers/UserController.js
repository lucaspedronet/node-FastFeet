import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(400).json({ messager: 'User not exist.' });
    }
    const { id, name, email, provider } = user;

    return res.json({ id, name, email, provider });
  }

  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: 'User already exist.' });
    }

    const { id, name, email, provider, token } = await User.create(req.body);

    return res.json({ id, name, email, provider, token });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
