import { ApolloServer } from 'apollo-server-express';

import typeDefs from '../src/app/typeDefs';
import resolvers from '../src/app/resolvers';

export const server = new ApolloServer({
  resolvers,
  typeDefs
});
