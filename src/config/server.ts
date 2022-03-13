import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router } from '../routes';

class App {
  public server;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(morgan('dev'));
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', router);
  }
}

export default new App().server;
