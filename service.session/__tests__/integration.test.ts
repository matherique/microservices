import { gql } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';

import { server } from './__utils';

const GET_TOKEN = gql`
  mutation generateToken($me: String!, $target: String) {
    generateToken(me: $me, target: $target)
  }
`;

describe('Identity Mutations ', () => {
  it('should create a token when pass a valid service name', async () => {
    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: GET_TOKEN,
      variables: { me: 'stock' }
    });
    if (res.data)
      expect(res.data.generateToken.split('.')[0]).toEqual(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      );
  });
});
