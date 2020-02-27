import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddlware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);
routes.get('/users/:id', UserController.index);
routes.put('/users', UserController.update);

export default routes;
