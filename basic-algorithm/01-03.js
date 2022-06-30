/**
 * 재귀함수 2진수 변환
 */
// 숫자를 2로 나눠서 나머지 들을 배열에 push -> reverse or shift
// 몫이 1이면 종료(재귀 베이스)
// 숫자 % 2 -> 나머지 (재귀 단계 recursive step)
let result = [];

function solution(num) {
  let quotient = num;

  if (quotient <= 1) {
    result.push(quotient);
    return result.reverse().join('');
  } else {
    result.push(quotient % 2);
    quotient = Math.floor(quotient / 2);
    return solution(quotient);
  }
}
console.log(solution(11));

// 재귀 함수 더 깔끔하게 작성
function binary(num) {
  if (num === 1 || num === 0) {
    return String(num);
  }
  return binary(Math.floor(num / 2)) + String(num % 2);
}
console.log(binary(11));

// 반복문으로 해결
let reVal = [];

function solution2(num) {
  let quotient = num;

  while (quotient >= 1) {
    if (quotient === 1) {
      reVal.unshift(quotient);
    } else {
      reVal.unshift(quotient % 2);
      quotient = Math.floor(quotient / 2);
      return solution2(quotient);
    }
    return reVal.join('');
  }
}
console.log(solution2(11));

let re = '';

function solution3(num) {
  let x = num;

  while (true) {
    if (x % 2 === 0) {
      re += '0';
    } else {
      re += '1';
    }

    x = Math.floor(x / 2);

    if (x === 1 || x === 0) {
      re += String(x);
      return re.split('').reverse().join('');
      // break;
    }
  }
}
console.log(solution3(11));
