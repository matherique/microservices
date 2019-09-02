import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    hello: String
  }

  input Request {
    me: String
    target: String!
    token: String!
  }

  type Mutation {
    generateToken(serviceName: String!): String!
    validate(me: String, target: String!, token: String!): Boolean!
  }
`;

// minha identidade = nome do serviço
// minha credencial = token do serviço para verificar se posso ao menos tentar acessar
// para onde vou  = nome do serviço alvo
// credencial para onde vou  = token para verificar se posso acessar o serviço alvo
