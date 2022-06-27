/**
 * [재귀함수] 반복문을 이용한 1부터 100까지의 합과 곱
 *
 * 재귀함수는 내가 나를 호출하는 함수로, 반복문 <-> 재귀함수는 서로 호환이 된다.
 *
 * Big O 표기법 (얼마만큼의 반복하는지 척도)
 * - O(n): n이 커지면 커질수록 반복횟수가 증가 n에 비례한다.
 * - O(1): 반복없이 바로 실행
 */
// 반복문
let n = 100;
let sum = 0;
// O(n)
for (let i = 1; i <= n + 1; i++) {
  sum += i;
}
console.log(sum);
// O(1)
console.log((n * (n + 1)) / 2);

let result = 1;

for (let i = 1; i <= 6; i++) {
  result *= i;
}

console.log(result);
