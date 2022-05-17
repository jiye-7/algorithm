/**
 * 문제8 : 객체의 키 이름 중복
 * 자바스크립트 객체를 다음과 같이 만들었다. 
 * 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )
 * 
console.log(obj['weight']);
 */
let obj = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
  3: 'hoho',
};

console.log(obj['weight']); // 84
console.log(obj.temperature); // 점 접근자는 '' 생략 가능
console.log(obj['3']); // 대괄호 접근자는 '' 생략 불가
console.log(obj[3]);
