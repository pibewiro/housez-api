import { getRepository, Repository } from 'typeorm';
import { Users } from '../entities/Users.entity';
import { IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async find(): Promise<Users[]> {
    const users = await this.repository.find({ select: ['name'] });

    return users;
  }
}

export { UsersRepository };
