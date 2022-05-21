/**
 * 문제21 : set은 어떻게 만드나요?
 * 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
 *
 *  1)  let x = {1, 2, 3, 5, 6, 7};
 *  2)  let x = {};
 *  3)  let x = new Set('javascript'); (O)
 *  4)  let x = new Set(range(5));
 *  5)  let x = new Set(); (O)
 */

/**
 * Set
 * 중복되지 않는 데이터를 저장하는 데이터 구조이다.
 */
let list = [1, 2, 2, 3, 3, 4];
let setVal = new Set(list);
setVal.add('안녕하세요');
setVal.delete(4);
// 안에 값이 있는지, 없는지 확인 (true, false로 반환)
console.log(setVal.has(100));
console.log(setVal);
