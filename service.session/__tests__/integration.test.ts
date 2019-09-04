import { gql } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';

import { server } from './__utils';

const GET_TOKEN = gql`
  mutation generateToken($me: String!, $target: String) {
    generateToken(me: $me, target: $target) {
      token
    }
  }
`;

describe('Identity Mutations ', () => {
  it('return a token when pass a valid service name', async () => {
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: GET_TOKEN,
      variables: { me: 'stock' }
    });

    const partToken = res.data.generateToken.token.split('.')[0];
    expect(partToken).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
  });

  it('return null when pass a invalid service name', async () => {
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: GET_TOKEN,
      variables: { me: 'invalditoken' }
    });

    const partToken = res.data.generateToken.token;
    expect(partToken).toBeNull();
  });

  it('return null when pass a invalid service name', async () => {
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: GET_TOKEN,
      variables: { me: 'invalditoken' }
    });

    const partToken = res.data.generateToken.token;
    expect(partToken).toBeNull();
  });
});
