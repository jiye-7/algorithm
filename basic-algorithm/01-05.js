/**
 * 재귀 함수 각 자릿수의 합
 */
let result = 0;

function solution(str) {
  if (str.length === 1) {
    return (result += parseInt(str, 10));
  }
  return (result +=
    parseInt(str.slice(-1), 10) + solution(str.slice(0, str.length - 1)));
}
console.log(solution('123123'));
