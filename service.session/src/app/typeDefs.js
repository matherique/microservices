import { gql } from 'apollo-server-express';

export default gql`
  type Service {
    name: String!
    talkTo: [String!]
  }

  type Query {
    me: Service
  }

  type Mutation {
    generateToken(me: String!, target: String): String!
    validate(me: String!, target: String!, token: String!): Boolean!
  }
`;

// minha identidade = nome do serviço
// minha credencial = token do serviço para verificar se posso ao menos tentar acessar
// para onde vou  = nome do serviço alvo
// credencial para onde vou  = token para verificar se posso acessar o serviço alvo
