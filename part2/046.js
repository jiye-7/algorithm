/**
 * 문제46 : 각 자리수의 합 2
 * 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.
 *
 * 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
 * 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
 */

const solution = (num) => {
  let numArr = [];
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    numArr.push(String(i));
  }

  numArr.forEach((el) => {
    if (el > 0 && el < 10) {
      sum += Number(el);
    } else {
      sum += Number(el[0]) + Number(el[1]);
    }
  });
  return sum;
};
// console.log(solution(15));

let arr = [];
let sum = 0;

const solution2 = (num) => {
  for (let i = 0; i < num; i++) {
    arr[i] = i + 1;
  }

  // arr 배열의 각 원소들을 더하기
  arr.forEach((el) => {
    // el 원소가 0이 될 때 종료
    while (el) {
      sum += el % 10;
      el = Math.floor(el / 10);
    }
    /*  if (el > 9) {
      sum += el % 10;
      sum += Math.floor(el / 10);
    } else {
      sum += el % 10;
    } */
  });
  return sum;
};
console.log(solution2(20));
