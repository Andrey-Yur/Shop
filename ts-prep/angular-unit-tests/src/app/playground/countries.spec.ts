import { countries } from './countries';
describe('countries', () => {
  it('should contain countries code', () => {
    const result = countries();

    expect(result).toContain('RU');
    expect(result).toContain('UA');
    expect(result).toContain('BY');
  });
});
