import { gql, graphql } from "react-apollo";

export const UserQuery = gql`
  query User {
    user {
      name,
      email
    }
  }
`;

export const withUser = graphql(UserQuery);
