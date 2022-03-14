import { UsersRepository } from '../../repositories/UsersRepository';
import { GetUsersController } from './GetUsersController';
import { GetUsersUseCase } from './GetUsersUseCase';

export default (): GetUsersController => {
  const usersRepository = new UsersRepository();
  const getUsersUseCase = new GetUsersUseCase(usersRepository);
  const GetUsersContainer = new GetUsersController(getUsersUseCase);

  return GetUsersContainer;
};
