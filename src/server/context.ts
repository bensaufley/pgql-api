import { ContextFunction } from 'apollo-server-core';
import { Context } from 'koa';
import jwt from 'jsonwebtoken';

export interface GqlContext {
  user?: {
    id: number;
  };
}

const context: ContextFunction<Context, GqlContext> = async ({
  ctx: { req },
}) => {
  const token = req.headers.authorization || '';
  if (!token) return {};

  const user: GqlContext['user'] = await new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded as GqlContext['user']);
    });
  });

  return { user };
};

export default context;
