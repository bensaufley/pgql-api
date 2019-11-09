import { expect } from 'chai';

import server from '@server/index';

describe('@server/index', () => {
  it('works', () => {
    expect(server('test')).to.eq('stub called with arg test');
  });

  it('sets a default', () => {
    expect(server()).to.eq('stub called with arg b');
  });
});
