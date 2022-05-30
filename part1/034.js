/**
 * 문제34 : sort 구현하기
 * A는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
 * 그런데 요즘 A는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.
 * A를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자. (키는 공백으로 구분하여 입력됩니다.)
 *
 * 입출력
 *  입력 : 176 156 155 165 166 169
 *  출력 : NO
 *
 *  입력 : 155 156 165 166 169 176
 *  출력 : YES
 */
/* const heightSort = (heights) => {
  const heightArr = heights.split(' ');
  let temp = '';
  let result = '';

  for (let i = 0; i < heightArr.length; i++) {
    if (i !== heightArr.length - 1) {
      if (heightArr[i] > heightArr[i + 1]) {
        temp = heightArr[i];
        heightArr[i] = heightArr[i + 1];
        heightArr[i + 1] = temp;

        result = 'No';
      }
    } else if (heightArr[i - 1] > heightArr[i]) {
      temp = heightArr[i];
      heightArr[i] = heightArr[i + 1];
      heightArr[i + 1] = temp;

      result = 'No';
    }
    result = 'Yes';
  }
  return result;
};

console.log(heightSort('176 156 155 165 166 169')); */
// heightSort('176 156 155 165 166 169');
// heightSort('155 156 165 166 169 176');

// const heightComparison = (heights) => {
//   let splitHeight = heights.split(' ');
//   return splitHeight[0] > splitHeight[1] ? 'NO' : 'YES';
// };
// console.log(heightComparison('176 156 155 165 166 169'));
// console.log(heightComparison('155 156 165 166 169 176'));

/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * 숫자를 정렬하기 위해서는 sort안에 익명함수로 리턴값을 받아야 된다.
 */

const heightSort = (heights) => {
  let unsorted = heights;
  let sorted = unsorted
    .split(' ')
    .sort((a, b) => a - b)
    .join(' ');

  return unsorted === sorted ? 'YES' : 'NO';
};
console.log(heightSort('176 156 155 165 166 169 90'));
console.log(heightSort('155 156 165 166 169 176'));
// a - b 오름차순(작은 수 -> 큰 수)
// b - a 내림차순(큰 수 -> 작은 수)
