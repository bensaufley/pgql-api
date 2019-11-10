/* eslint-disable no-console */
import { serve } from '@server/index';

try {
  serve();
  console.log('Now listening on port', process.env.PORT);
} catch (err) {
  console.error(err);
  process.exit(1);
}
