import { ReactNode } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_URI } from '@src/constants/environments';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache,
});

export default ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
