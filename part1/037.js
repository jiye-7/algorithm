/**
 * 문제37 : 반장 선거
 * 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
 * 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.
 * 입력
 *  원범 원범 혜원 혜원 혜원 혜원 유진 유진
 *  출력
 *  혜원(이)가 총 4표로 반장이 되었습니다.
 */

// 객체에 이름을 키, 적힌 횟수를 값으로 넣기

let result = {
  원범: 0,
  혜원: 0,
  유진: 0,
};

/* function selectClassDelegate(names) {
  const member = names.split(' '); // ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진'];
  let delegate = '';

  for (let name of member) {
    name === '원범'
      ? ++result['원범']
      : name === '혜원'
      ? ++result['혜원']
      : name === '유진'
      ? ++result['유진']
      : '';
  }

  if (result['원범'] > result['혜원']) {
    delegate = '원범';
  } else if (result['원범'] > result['유진']) {
    delegate = '원범';
  } else if (result['혜원'] > result['유진']) {
    delegate = '혜원';
  } else {
    delegate = '유진';
  }

  return `${delegate}(이)가 총 ${result[delegate]}표로 반장이 되었습니다.`;
} 

console.log(selectClassDelegate('원범 원범 혜원 혜원 유진 유진 유진'));

*/
let result2 = {};

function selectClassDelegate(names) {
  for (let name of names) {
    result2[name] === undefined
      ? (result2[name] = 1)
      : (result2[name] = result2[name] + 1);
  }

  let re = Object.keys(result2).reduce((acc, cur) => {
    return result2[cur] > result2[acc] ? cur : acc;
  });

  return `${re}(이)가 총 ${result2[re]}표로 반장이 되었습니다.`;
}

console.log(
  selectClassDelegate([
    '원범',
    '원범',
    '혜원',
    '혜원',
    '혜원',
    '혜원',
    '유진',
    '유진',
  ])
);
