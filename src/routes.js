import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ messager: 'Hellow world!' });
});

export default routes;
