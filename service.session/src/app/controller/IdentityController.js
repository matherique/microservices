import jwt from 'jsonwebtoken';

export class IdentityController {
  async validate({ me, token, target }) {
    const envKey = me.replace('.', '_').toUpperCase();
    const isValid = await jwt.verify(token, process.env[envKey]);
    console.log(isValid);

    return true;
  }
  async generateToken({ me, target }) {
    const envKey = me.replace('.', '_').toUpperCase();
    const token = await jwt.sign(
      {
        me
      },
      process.env[envKey],
      { expiresIn: '7d' }
    );
    return token;
  }
}
