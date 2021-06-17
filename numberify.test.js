import  { numberify } from './numberify.js';

describe('numberify function', () => {
  test('takes a sting and converts it to a number', () => {
    const n = ('100');

    expect(numberify(n)).toEqual(100);
  });
});
