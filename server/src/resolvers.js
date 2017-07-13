import * as mocks from "./mocks";

const user = (_obj, _args, { user }, _info) => {
  if (!user) {
    throw new Error('In field "user": unauthorized');
  }
  return user;
};

const users = () => mocks.users;

const login = (_obj, { token }, _context, _info) => {
  return mocks.session;
};

const resolvers = {
  Query: {
    user,
    users,
  },
  Mutation: {
    login,
  },
};

export default resolvers;
