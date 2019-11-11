import { IFieldResolver } from 'apollo-server-koa';

import { GqlContext } from '@server/context';
import db from '@server/db';

interface User {
  id: number;
  email: string;
  username: string;
}

interface UsersArgs {
  username: string;
}

export const users: IFieldResolver<
  {},
  GqlContext,
  UsersArgs
> = async (): Promise<User[]> => {
  const u = await db.select('id', 'email', 'username').table<User>('users');
  return u;
};

interface UserArgs {
  id?: number;
  email?: string;
  username?: string;
}

export const user: IFieldResolver<{}, GqlContext, UserArgs> = async (
  _,
  { id, email, username },
): Promise<User | null> => {
  if (id === undefined && !email && !username)
    throw new Error('Must supply at least one parameter');
  let params: UserArgs;
  if (id !== undefined) params = { id };
  else if (email) params = { email };
  else params = { username };
  const u = await db
    .select('id', 'email', 'username')
    .table<User>('users')
    .where(params)
    .first();
  return u || null;
};
