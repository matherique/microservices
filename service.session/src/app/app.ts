import * as express from 'express';

class AppController {
  express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
  }
}

export default new AppController().express;
