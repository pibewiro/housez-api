import { Router } from 'express';
import GetUsersContainer from '../modules/users/useCases/getUsers';

const UserRoutes = Router();

UserRoutes.get('/', (req, res) => GetUsersContainer().handle(req, res));

export default UserRoutes;
