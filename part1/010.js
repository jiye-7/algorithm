/**
 * 문제10 : 별 찍기
 *
 * 입력
 * 5
 *
 * 출력
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */

// 공백 4, 3, 2, 1, 0
// 별 개수 2*n-1
const dan = 5;

for (let i = 1; i <= dan; i++) {
  let star = '';

  // 공백 찍기
  for (let j = 1; j <= dan - i; j++) {
    star += ' ';
  }

  // 별 찍기
  for (let k = 1; k <= i * 2 - 1; k++) {
    star += '*';
  }
  console.log(star);
}
