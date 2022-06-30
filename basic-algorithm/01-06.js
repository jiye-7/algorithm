/**
 * 재귀함수 피보나치순열
 */
// 1, 1, 2, 3, 5, 8, 13, 21, ...
// 7
let a = 1;
let b = 1;

for (let i = 0; i < 7; i++) {
  let c = a + b;
  a = b;
  b = c;
}

console.log(b);

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
