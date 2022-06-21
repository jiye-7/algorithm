/**
 * 문제49 : 최댓값 구하기
 * 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
 *
 * 입출력
 *  입력 : 10 9 8 7 6 5 4 3 2
 *  출력 : 10
 */
const numStr = '1 4 9 8 3 10 5 6 2 7';

const solution = (str) => {
  let numArr = str.split(' ').map((el) => Number(el));
  let maxNum = 0;

  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] > numArr[i + 1]) {
      maxNum = numArr[i];
      numArr[i] = numArr[i + 1];
      numArr[i + 1] = maxNum;
    }
  }
  return maxNum;
};
console.log(solution(numStr));

// 오름차순 정렬로 가장 큰 수가 마지막으로 가니 -> 마지막 요소를 리턴 or 내림차순으로 정렬하고, 가장 첫 번째 요소 리턴.
const solution2 = (str) => {
  let arr = str
    .split(' ')
    .map((el) => parseInt(el, 10))
    .sort((a, b) => a - b);

  return arr[arr.length - 1];
};
// console.log(solution2(numStr));
