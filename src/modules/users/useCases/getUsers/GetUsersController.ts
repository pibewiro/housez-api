import { GetUsersUseCase } from './GetUsersUseCase';

class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  handle(req, res) {
    const data = this.getUsersUseCase.execute();

    return res.status(201).send(data);
  }
}

export { GetUsersController };
