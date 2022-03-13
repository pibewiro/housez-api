import { GetUsersController } from './GetUsersController';
import { GetUsersUseCase } from './GetUsersUseCase';

export default (): GetUsersController => {
  const getUsersUseCase = new GetUsersUseCase();
  const getUsersController = new GetUsersController(getUsersUseCase);

  return getUsersController;
};
