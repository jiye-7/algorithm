/**
 * 문제6 : False
 * 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
 * False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**
 *  1)  NaN
 *  2)  1
 *  3)  ""
 *  4)  0
 *  5)  undefined
 */
console.log(!1);

/**
 * !: false값은 true로, true값은 false로 반환
 * - falsy: 0, ''(빈 문자열), false, null, undefined, NaN(not a number, 숫자가 아니다)
 *    isNaN: 숫자가 아닌지 확인하는 메소드 ('이 값이 숫자가 아닌 것이 맞는가?'); 숫자가 아닐 경우 true를 반환
 *
 * - truthy
 */
