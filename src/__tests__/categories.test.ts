import categories from '../categories/index';

describe('Categories Test', () => {
  test('must have school', () => {
    expect(categories).toHaveProperty("school");
  });
});
