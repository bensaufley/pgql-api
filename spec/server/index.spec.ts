import { expect } from 'chai';
import { Server } from 'http';
import supertest from 'supertest';

import { serve } from '@server/index';

describe('@server/index', () => {
  let server: Server;

  beforeEach(() => {
    server = serve();
  });

  afterEach(() => {
    server.close();
  });

  it('works', async () => {
    const resp = await supertest(server)
      .get('/')
      .query({
        query: '{users{name}}',
      });

    expect(resp.body).to.eql({
      data: { users: [] },
    });
  });
});
