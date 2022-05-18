/**
 * 문제16 : 로꾸거
 * 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
 */
function reverse(str) {
  return console.log(str.split('').reverse().join(''));
}

function reverse2(str) {
  let splitStr = str.split('');
  console.log(splitStr);
  let result = '';

  for (let i = splitStr.length; i > 0; i--) {
    result += splitStr[i - 1];
  }
  console.log(result);
}

// reverse('안녕하세용!');
reverse2('abcde');
