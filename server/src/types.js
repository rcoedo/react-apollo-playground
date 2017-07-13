const types = `
type Session {
  token: String
}

type User {
  id: ID
  name: String
  email: String
}

type Query {
  users: [User]
  user: User
}

type Mutation {
  login(token: String): Session
}
`;

export default types;
