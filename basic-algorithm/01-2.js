/*
 * [재귀함수] 재귀함수를 이용한 1부터 100까지의 합과 곱
 */
function add(n) {
  return n <= 1 ? n : n + add(n - 1);
}
console.log(add(100));

function multiply(n) {
  /* if (n <= 1) {
    return x;
  } else {
    ++x;
    return x * multiply(x, n - 1);
  } */
  return n <= 1 ? n : n * multiply(n - 1);
}
console.log(multiply(5));
