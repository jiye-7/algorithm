/**
 * 문제15 : 자기소개
 * 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
 * 만약 입력으로 `김초코`이라는 이름이 주어지면 "안녕하세요. 저는 김초코입니다."라고 출력하게 해주세요.
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (name) => {
  // printName(line);
  console.log(`안녕하세요. 저는 ${name}입니다.`);
  rl.close();
}).on('close', () => {
  process.exit();
});

/* const printName = (name) => {
  console.log(`안녕하세요. 저는 ${name}입니다.`);
}; */
