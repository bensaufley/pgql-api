import { user, users } from '@records/users/resolvers';

const resolvers = {
  Query: {
    user,
    users,
  },
};

export default resolvers;
