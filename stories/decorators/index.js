import React from "react";
import { ApolloProvider } from "react-apollo";
import { buildClient } from "providers";

const networkOptions = { uri: "http://localhost:3002/graphql" };
const nullTokenClient = buildClient({ tokenFetcher: () => null, networkOptions });
const validTokenClient = buildClient({ tokenFetcher: () => "VALID_INNER_TOKEN", networkOptions });

export const NullTokenProvider = ({ children }) => (
  <ApolloProvider client={nullTokenClient}>
    {children}
  </ApolloProvider>
);

export const ValidTokenProvider = ({ children }) => (
  <ApolloProvider client={validTokenClient}>
    {children}
  </ApolloProvider>
);
