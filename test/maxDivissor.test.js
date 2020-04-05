import {gcd, chinaGcd} from '../src/maxDivissor';

test('求最大公约数:辗转相除法', () => {
  expect(gcd(4, 2)).toBe(2);
  expect(gcd(4, 3)).toBe(1);
  expect(gcd(9, 6)).toBe(3);
})

test('求最大公约数:更相减损术', () => {
  expect(gcd(4, 2)).toBe(2);
  expect(gcd(4, 3)).toBe(1);
  expect(gcd(9, 6)).toBe(3);
})
