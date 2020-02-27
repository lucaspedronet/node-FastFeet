import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddlware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/users/:id', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);

routes.use(authMiddlware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
