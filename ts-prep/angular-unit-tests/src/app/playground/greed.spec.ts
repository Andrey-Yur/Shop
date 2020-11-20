import { greed } from './greed';

describe('greed', () => {
  it('should include name in return message ', () => {
    expect(greed('Angular')).toContain('Angular');
  });
});
