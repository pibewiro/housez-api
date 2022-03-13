class GetUsersUseCase {
  private users;
  constructor() {
    this.users = [{ id: 111, name: 'John' }];
  }

  execute() {
    return this.users;
  }
}

export { GetUsersUseCase };
