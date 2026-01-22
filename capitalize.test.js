const capitalize = require('./capitalize'); // CommonJS import

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

it('works', () => {
  expect(capitalize("asd")).toBe("Asd");
})