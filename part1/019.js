/**
 * 문제19 : 제곱을 구하자
 * 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
 */
let num = '2 6';

function squareNum(inputNum) {
  let a = +inputNum.split(' ')[0];
  let b = +inputNum.split(' ')[1];
  let multiply = 1;

  for (let i = 1; i <= b; i++) {
    multiply *= a;
  }
  console.log(multiply);
}

squareNum(num);

// pow
let numArr = ['2', '6'];
console.log(Math.pow(numArr[0], numArr[1]));
console.log(Math.pow(parseInt(numArr[0]), +numArr[1]));
