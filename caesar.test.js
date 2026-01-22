const caesarCipher = require("./caesar");

test('"aaabbbccc" becomes "bbbcccddd"', () => {
  expect(caesarCipher('aaabbbccc',1)).toBe('bbbcccddd');
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
  expect(caesarCipher('aAabBbzZz',1)).toBe('bBbcCcaAa');
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
  expect(caesarCipher('a1ab#bc c',1)).toBe('b1bc#cd d');
});

test('1 becomes "not a string"', () => {
  expect(caesarCipher(1)).toBe('not a string');
});