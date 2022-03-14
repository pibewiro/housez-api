import { GetUsersUseCase } from './GetUsersUseCase';

class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle(req, res) {
    const data = await this.getUsersUseCase.execute();

    return res.status(200).send(data);
  }
}

export { GetUsersController };
