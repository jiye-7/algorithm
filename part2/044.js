/**
 * 문제44 : 각 자리수의 합
 * 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
 *
 * 예를 들어
 * 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
 * 3849 = 3+8+4+9 이고 정답은 24입니다.
 */
const solution = (val) => {
  let sum = 0;
  val
    .split('')
    .map((el) => {
      return parseInt(el, 10); // Number()
    })
    .map((el) => {
      sum += el;
    });
  return sum;
};

// console.log(solution('18234'));
// console.log(solution('3849'));

const solution2 = (num) => {
  let result = 0;
  let quotient = num;

  // quotient > 0
  while (quotient) {
    result += Math.floor(quotient % 10); // 나머지 값을 더하기
    quotient = Math.floor(quotient / 10); // 몫 저장
  }
  return result;
};

console.log(solution2(3849));
