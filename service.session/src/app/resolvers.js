import jwt from 'jsonwebtoken';

// TODO: Colocar essas informacoes em um kvs
const servicos = [
  'service.user',
  'service.product',
  'service.stock',
  'service.category'
];

export default {
  Query: {
    hello: () => 'ola mundo'
  },
  Mutation: {
    validate: async (_, { me, token, target }) => {
      const envKey = me.replace('.', '_').toUpperCase();
      const isValid = await jwt.verify(token, process.env[envKey]);
      console.log(isValid);

      return true;
    },
    generateToken: async (_, { me, target }) => {
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
};
