/**
 * 문제28 : 2-gram
 * 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
 * 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
 *
 * 입력
 *  Javascript
 * 출력
 *  J a
 *  a v
 *  v a
 *  a s
 *  s c
 *  c r
 *  r i
 *  i p
 *  p t
 * 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.
 */
const twoGram = (word) => {
  let _2gram = '';

  for (let i = 0; i < word.length - 1; i++) {
    _2gram = '';
    if (i !== word.length - 1) {
      // 여기서 2개씩 더해줘야 됨.
      _2gram += word[i] + word[i + 1];
    } else {
      _2gram += word[i] + word[i + 1];
      break;
    }
    console.log(_2gram);
  }
};

const twoGram2 = (word) => {
  let _2gram = '';

  for (let i = 0; i < word.length - 1; i++) {
    _2gram = '';
    _2gram += word[i] + word[i + 1];
    console.log(_2gram);
  }
};

twoGram('Hello');

twoGram('Hello');
