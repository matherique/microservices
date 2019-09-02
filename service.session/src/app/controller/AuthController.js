import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

class AuthController {
  async authenticate({ req }) {
    if (!req.headers.authorization)
      throw new AuthenticationError('auth header must be provide');
    // const me = 'service.user';
    // erro aqui, ver pq acontece
    const token = req.headers.authorization;
    const { me } = await jwt.verify(token, process.env.SECRET);
    if (!me) throw new AuthenticationError('invalid token');

    return { me };
  }
}

export default new AuthController();
