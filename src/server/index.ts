import Koa from 'koa';
import { ApolloServer, PlaygroundConfig } from 'apollo-server-koa';

import typeDefs from '@graphql/typeDefs/schema.graphql';
import resolvers from '@graphql/resolvers';

export const koaServer = new Koa();

let playground: PlaygroundConfig | undefined;
const debug = process.env.APP_ENV === 'dev';
let introspection = false;

if (process.env.APP_ENV !== 'prod') {
  playground = {
    settings: {
      'editor.theme': 'light',
    },
  };
  introspection = true;
}

const apolloServer = new ApolloServer({
  debug,
  introspection,
  playground,
  resolvers,
  typeDefs,
});

apolloServer.applyMiddleware({ app: koaServer, path: '/' });

export const serve = () =>
  koaServer.listen({
    port: Number(process.env.PORT),
  });
