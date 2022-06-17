/**
 * 문제43 : 10진수를 2진수로
 * 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다
 * 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요
 * 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
 */
function solution(decimalNmm, binaryNum) {
  return decimalNmm.toString(binaryNum);
}
// console.log(solution(10, 2));
// console.log(solution(160, 2));

function solution2(decimalNum) {
  let binaryArr = []; // 2진수 담을 배열 나머지 결과를 담을 배열
  let num = decimalNum;

  while (num >= 1) {
    binaryArr.unshift(num % 2); // push
    num = Math.floor(num / 2);
  }
  return binaryArr.join(''); // binaryArr.reverse
}
console.log(solution2(10));
console.log(solution2(32));
console.log(solution2(160));
