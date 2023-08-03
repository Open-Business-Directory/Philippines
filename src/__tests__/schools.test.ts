import index from '../index';

describe('Main File Test', () => {
  test('must have categories', () => {
    expect(index).toHaveProperty("categories");
  });
});
