import { createTestClient } from 'apollo-server-testing';

import { ApolloServer } from 'apollo-server-express';

import typeDefs from '../../src/app/typeDefs';
import resolvers from '../../src/app/resolvers';

const server = new ApolloServer({
  resolvers,
  typeDefs
});

export default createTestClient(server);
