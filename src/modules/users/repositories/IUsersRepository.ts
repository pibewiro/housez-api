import { Users } from '../entities/Users.entity';

interface IUsersRepository {
  find(): Promise<Users[]>;
}

export { IUsersRepository };
