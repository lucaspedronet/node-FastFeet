import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token note provider.' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id, provider } = await promisify(jwt.verify)(
      token,
      authConfig.secret
    );

    if (!provider)
      return res.status(400).json({ error: 'Provider not permission' });

    req.userId = id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid.' });
  }
};
