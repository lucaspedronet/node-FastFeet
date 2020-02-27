/* eslint-disable no-unused-expressions */
import * as Yup from 'yup';
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
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: 'User already exist.' });
    }

    const { id, name, email, provider, token } = await User.create(req.body);

    return res.json({ id, name, email, provider, token });
  }

  async update(req, res) {
    /**
     * Validation Yup schema
     */
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldpassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldpassword', (oldpassword, field) =>
          oldpassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      )
    });

    /**
     * Verificar o schema
     */
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { email, oldpassword } = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ error: 'User not exists.' });
    }

    if (email && email !== user.email) {
      const emailExist = await User.findOne({ where: { email } });

      if (emailExist) {
        return res.status(400).json({ error: 'Email already exist.' });
      }
    }

    if (oldpassword && !(await user.checkPassword(oldpassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { name, provider } = await user.update(req.body);

    return res.status(200).json({
      messager: 'Success User update.',
      data: { name, email, provider }
    });
  }
}

export default new UserController();
