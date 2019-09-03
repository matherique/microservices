import * as jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';
import { IdentityDTO } from './DTO';

export async function getInfo(token: IdentityDTO['token']) {
  const { me } = (await jwt.verify(token, process.env.SECRET!)) as any;

  if (!me) throw new AuthenticationError('invalid token');
  return me;
}
