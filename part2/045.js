/**
 * 문제45 : getTime()함수 사용하기
 * Date 객체의 메소드 중 하나인 getTime()은
 * 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms, 1000분의 1초)로 반환합니다.
 * 이를 이용하여 현재 연도(2022)를 출력해보세요.
 */
let date = new Date();
let ms = date.getTime(); // 1655450516074
// 1년의 ms 구하기
// 1시간 -> 초, 60분 * 60초 => 3600초(1시간)
// 24시간 -> 60 * 60 * 24 => 86400초
// 1년 -> 60 * 60 * 24 * 365 => 31536000초
let hour = 60 * 60;
let day = hour * 24;
let year = day * 365;
let oneYearAtMillisecond = year * 1000; // 1년의 millisecond
// JavaScript 날짜의 기반은 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 나타낸 것
console.log(Math.floor(ms / oneYearAtMillisecond + 1970));
