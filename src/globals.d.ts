declare namespace NodeJS {
  export interface ProcessEnv {
    APP_ENV: 'dev' | 'test' | 'staging' | 'prod';
    NODE_ENV: 'development' | 'test' | 'production';
    JWT_SECRET: string;
    PEPPER: string;
    PORT: string;
  }
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const Schema: DocumentNode;

  export = Schema;
}
