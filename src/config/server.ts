import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import morgan from 'morgan';
import cors from 'cors';
import { router } from '../routes';
import { AppError } from '../errors/AppError';

class App {
  public server;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(morgan('dev'));
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', router);
  }

  errors() {
    this.server.use(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
          return res.status(err.statusCode).json({ message: err.message });
        }
        return res
          .status(500)
          .json({ message: `Internal Server Error ${err.message}` });
      }
    );
  }
}

export default new App().server;
