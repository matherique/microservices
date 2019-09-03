import { ApolloServer } from 'apollo-server-express';

import app from './app';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const PORT = process.env.PORT || 3333;

const server = new ApolloServer({
  resolvers,
  typeDefs
});

server.applyMiddleware({ app });

export default function boostrap() {
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`)
  );
}
