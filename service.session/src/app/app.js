import express from 'express';

// console.log(AuthController);

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
  }
}

export default new AppController().express;
