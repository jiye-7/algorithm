/**
 * # 문제39 : 오타 수정하기
 * A는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 A의 타자 속도가 빠르다는 것을 모두 알게 되자 A는 모두의 앞에서 타자 실력을 보여주게 됩니다.
 * 그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다.
 * A는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다
 * 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
 *
 * 입출력
 *  입력 : quert
 *  출력 : euert
 *
 *  입력 : hqllo my namq is hyqwon
 *  출력 : hello my name is hyewon
 */
const qToe = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'q') {
      result += 'e';
    } else {
      result += str[i];
    }
  }
  return result;
};
// console.log(qToe('quert') === 'euert');
// console.log(qToe('hqllo my namq is hyqwon') === 'hello my name is hyewon');

const qToe2 = (str) => {
  return str.split('q').join('e');
};
console.log(qToe2('quert'));
console.log(qToe2('hqllo my namq is hyqwon'));
