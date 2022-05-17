/**
 * 문제9 : concat을 활용한 출력 방법
 * 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
 *
 * concatenate: 연결하다
 * concat(...strings: string[]): string;
 */
// 데이터
let year = '2022';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

// 빈칸을 채워주세요
// let result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
let result = year.concat(
  '/',
  month,
  '/',
  day,
  ' ',
  hour,
  ':',
  minute,
  ':',
  second
);

// 출력 2022/04/26 11:34:27
console.log(result);
