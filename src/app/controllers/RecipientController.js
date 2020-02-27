import * as Yup from 'yup';
import Recipient from '../models/Recipients';
import User from '../models/User';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      zip_code: Yup.string()
        .min(5)
        .max(8)
        .required(),
      city: Yup.string()
        .min(3)
        .required(),
      state: Yup.string()
        .min(2)
        .max(2)
        .required(),
      sector: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string()
        .min(6)
        .max(128)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name }
    });

    if (recipientExists) {
      return res.status(401).json({ error: 'Recipient already exists' });
    }

    const {
      name,
      zip_code,
      city,
      state,
      sector,
      street,
      number
    } = await Recipient.create(req.body);

    return res.json({
      name,
      zip_code,
      city,
      state,
      sector,
      street,
      number
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      zip_code: Yup.string()
        .min(5)
        .max(8),
      city: Yup.string().min(3),
      state: Yup.string()
        .min(2)
        .max(2),
      sector: Yup.string(),
      street: Yup.string(),
      number: Yup.string()
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { name } = req.body;
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    if (name && name !== recipient.name) {
      const nameExists = await Recipient.findOne({ where: { name } });
      if (nameExists) {
        return res
          .status(400)
          .json({ error: `Recipient name ${name} already exists` });
      }
    }

    const {
      zip_code,
      city,
      state,
      street,
      sector,
      number
    } = await recipient.update(req.body);

    return res.status(200).json({
      messager: 'Success request',
      data: { name, zip_code, city, state, street, sector, number }
    });
  }
}
export default new RecipientController();
