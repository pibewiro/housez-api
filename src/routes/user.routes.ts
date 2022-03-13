import { Router } from 'express';

const UserRoutes = Router();

UserRoutes.get('/', (req, res) => {
  res.send('hello');
});

export default UserRoutes;
