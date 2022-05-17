/**
 * 문제5 : for문 계산
 * 다음 코드의 출력 값으로 알맞은 것은?
 * let a = 10;
 * let b = 2;
 *
 * for(let i=1; i<5; i+=2) {
 *  a += i;
 * }
 *
 * console.log(a+b);
 *  1)  10
 *  2)  12
 *  3)  14
 *  4)  16
 */

let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b); // 16
// i=1, a=10, a+1 -> a=11
// i=3, a=11, a+3 -> a=14
// i=5 x

// 14+2=16
