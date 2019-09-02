import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';

import app from './app';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import AuthController from './controller/AuthController';

const PORT = process.env.PORT || 3333;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: AuthController.authenticate
});
server.applyMiddleware({ app });

export default function boostrap() {
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`)
  );
}
