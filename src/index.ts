/* eslint-disable no-console */
import { serve } from '@server/index';

const requiredEnvVars: (keyof typeof process.env)[] = [
  'APP_ENV',
  'NODE_ENV',
  'JWT_SECRET',
  'PEPPER',
  'PORT',
];

try {
  requiredEnvVars.forEach((v) => {
    if (!process.env[v]) throw new Error(`Missing required env var ${v}`);
  });
  serve();
  console.log('Now listening on port', process.env.PORT);
} catch (err) {
  console.error(err);
  process.exit(1);
}
