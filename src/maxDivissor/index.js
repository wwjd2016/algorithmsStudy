/**
 * @file 最大公约数
 * @date 2020-04-04 23:43:29
*/

// 辗转相除法
export const gcd = (a, b) => {
 if (a % b === 0) {
    return b;
 }
 return gcd(b, a % b);
}

// 九章算法
export const chinaGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return chinaGcd(a - b, b);
  }
  return chinaGcd(b - a, a);
}
