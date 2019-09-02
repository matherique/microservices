import jwt from 'jsonwebtoken';

// TODO: Colocar essas informacoes em um kvs
const services = {
  user: [],
  product: ['stock', 'category'],
  stock: ['product', 'category'],
  category: []
};

export default {
  Query: {
    me: (_, __, { me }) => {
      const serviceName = me.replace('service.', '');
      return { name: me, talkTo: services[serviceName] };
    }
  },
  Mutation: {
    validate: async (_, { me, token, target }) => {
      const envKey = me.replace('.', '_').toUpperCase();
      const isValid = await jwt.verify(token, process.env[envKey]);

      return true;
    },
    generateToken: async (_, { me, target }) => {
      const envKey = me.replace('.', '_').toUpperCase();
      const secret = !target ? process.env.SECRET : process.env[envKey];

      const token = await jwt.sign(
        {
          me
        },
        secret,
        { expiresIn: '7d' }
      );

      return token;
    }
  }
};
