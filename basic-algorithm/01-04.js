/**
 * 재귀함수 문자열 뒤집기
 */
let word = 'javascript';

function solution(str) {
  if (str.length === 1) {
    return String(str);
  }
  return str[str.length - 1] + solution(str.slice(0, -1));
}
console.log(solution(word));

// 반복문으로 구현
let string = 'javascript';

function solution2(str) {
  while (true) {
    if (str.length === 1) {
      return String(str);
    }
    return str[str.length - 1] + solution2(str.slice(0, str.length - 1));
  }
}
console.log(solution2(word));

// 또 다른 풀이
let str2 = 'typescript';
let result = '';

function solution3(str) {
  while (true) {
    if (str.length === 1) {
      return (result += str);
    }
    let splitStr = str.split('');
    result += splitStr.pop();
    str = splitStr.join('');
  }
}
console.log(solution3(str2));
