import { Router } from 'express';
import GetUsersController from '../modules/users/useCases/getUsers';

const UserRoutes = Router();

UserRoutes.get('/', (req, res) => GetUsersController().handle(req, res));

export default UserRoutes;
