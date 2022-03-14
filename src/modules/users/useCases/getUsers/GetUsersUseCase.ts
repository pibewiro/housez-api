import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetUsersUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute() {
    const data = await this.UsersRepository.find();
    return data;
  }
}

export { GetUsersUseCase };
