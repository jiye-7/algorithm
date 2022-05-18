/**
 * 문제20 : 몫과 나머지
 * 공백으로 구분하여 두 숫자가 주어집니다.
 * 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
 *
 * 입출력
 *  입력 : 10 2
 *  출력 : 5 0
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  calculator(line);
  rl.close();
}).on('close', () => {
  process.exit();
});

const calculator = (line) => {
  // let num1 = +line.split(' ')[0];
  let num1 = parseInt(line[0], 10);
  let num2 = +line.split(' ')[1];

  return console.log(`${Math.floor(num1 / num2)} ${num1 % num2}`);
};
