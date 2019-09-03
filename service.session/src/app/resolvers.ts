import { IdentityDTO } from './DTO';
import IdentityController from './controller/IdentityController';

// TODO: Colocar essas informacoes em um kvs
export default {
  Query: {
    me: (_, __, data: IdentityDTO) => IdentityController.info(data)
  },
  Mutation: {
    validate: async (_, data) => await IdentityController.validate(data),
    generateToken: async (_, data: IdentityDTO) =>
      await IdentityController.generateToken(data)
  }
};
