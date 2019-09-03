import * as jwt from 'jsonwebtoken';
import { IdentityDTO } from '../DTO';
import { getInfo } from '../auth';

const services = {
  user: [],
  product: ['stock', 'category'],
  stock: ['product', 'category'],
  category: []
};

class IdentityController {
  async info({ me }: IdentityDTO) {
    if (!me) return null;

    const serviceName = me.replace('service.', '');

    return { name: me, talkTo: services[serviceName] };
  }

  async validate({ me, token }: IdentityDTO) {
    getInfo(me);

    const envKey = me.replace('.', '_').toUpperCase();
    const isValid = await jwt.verify(token, process.env[envKey]!);
    console.log(isValid);
    return true;
  }
  async generateToken({ me, target }: IdentityDTO) {
    const envKey = me.replace('.', '_').toUpperCase();
    const secret = !target ? process.env.SECRET : process.env[envKey];

    const token = await jwt.sign(
      {
        me,
        target
      },
      secret!,
      { expiresIn: '7d' }
    );

    return token;
  }
}

export default new IdentityController();
