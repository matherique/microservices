import 'dotenv/config';

import * as jwt from 'jsonwebtoken';
import { IdentityDTO } from '../DTO';
import { getInfo } from '../auth';

const services = {
  user: ['product'],
  product: ['stock', 'category'],
  stock: ['product', 'category'],
  category: []
};

class IdentityController {
  async info({ me }: IdentityDTO) {
    if (!me) return null;

    return { name: me, talkTo: services[me] };
  }

  async validate({ me, token, target }: IdentityDTO) {
    getInfo(me);

    const envKey = `SERVICE_${me}`;
    const isValid = (await jwt.verify(token, process.env[envKey]!)) as any;

    if (isValid.target === target) return true;
    return false;
  }

  async generateToken({ me, target }: IdentityDTO) {
    const envKey = `SERVICE_${me.toUpperCase()}`;
    // se passar um me que nao existe
    if (services[me] === undefined) return { token: null };

    // se passar um target que nao existe
    if (target && services[target] === undefined) return { token: null };

    // se passar um target que nao esta na lista de permitidos
    if (target && services[me].indexOf(target) < 0) return { token: null };

    const secret = !target ? process.env.SECRET : process.env[envKey]!;
    const tokenData = !target ? { me } : { me, target };

    const token = await jwt.sign(tokenData, secret!, {
      expiresIn: '7d',
      algorithm: 'HS256'
    });

    return { token };
  }
}

export default new IdentityController();
