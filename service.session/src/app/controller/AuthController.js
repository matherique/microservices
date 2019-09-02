import jwt from 'jsonwebtoken';

class AuthController {
  async authenticate(req) {
    const token = req.headers.authorization;
    const { service } = req.body;
    const { me } = await jwt.verify(token, process.env.SECRET);

    if (me !== service) throw new AuthenticationError('invalid token');

    return { me };
  }
}

export default new AuthController();
