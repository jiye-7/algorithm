/**
 * 문제42 : 2020년
 *
 * 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
 * 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
 * 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
 * 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.
 *
 * 제한 조건
 * 2020년은 윤년입니다.
 * 2020년 a월 b일은 실제로 있는 날입니다.
 * (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
 */
const solution = (month, date) => {
  let returnDay = '';

  if (month >= 0 && month < 12 && date > 0 && date < 32) {
    let day = new Date(2020, month - 1, date).getDay();

    switch (day) {
      case 0:
        returnDay = 'SUN';
        break;
      case 1:
        returnDay = 'MON';
        break;
      case 2:
        returnDay = 'TUE';
        break;
      case 3:
        returnDay = 'WED';
        break;
      case 4:
        returnDay = 'THU';
        break;
      case 5:
        returnDay = 'FRI';
        break;
      case 6:
        returnDay = 'SAT';
        break;
      default:
        break;
    }
  } else {
    returnDay = '존재하지 않는 월/일 입니다.';
  }
  return returnDay;
};
console.log(solution(5, 24));
console.log(solution(13, 34));

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const solution2 = (month, date) => {
  if (month >= 0 && month < 12 && date > 0 && date < 32) {
    return days[new Date(`2020-${month}-${date}`).getDay()];
  } else {
    return '존재하지 않는 월/일 입니다.';
  }
};
console.log(solution2(5, 24));
console.log(solution2(13, 34));
