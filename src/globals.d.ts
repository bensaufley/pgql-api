declare namespace NodeJS {
  export interface ProcessEnv {
    APP_ENV: 'dev' | 'test' | 'staging' | 'prod';
    NODE_ENV: 'development' | 'test' | 'production';
  }
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const Schema: DocumentNode;

  export = Schema;
}
