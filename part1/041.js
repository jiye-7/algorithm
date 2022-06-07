/**
 * 문제41 : 소수판별
 * 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요
 * 소수이면 YES로, 소수가 아니면 NO로 출력해주세요
 * (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
 */
const distinctionOfPrimeNumber = (number) => {
  if (number >= 2 && number % Math.sqrt(number) !== 0) {
    return 'YES';
  } else {
    return 'NO';
  }
};

// console.log(distinctionOfPrimeNumber(2));
// console.log(distinctionOfPrimeNumber(3));
// console.log(distinctionOfPrimeNumber(5));
// console.log(distinctionOfPrimeNumber(4));
// console.log(distinctionOfPrimeNumber(17));
// console.log(distinctionOfPrimeNumber(23));
// console.log(distinctionOfPrimeNumber(29));

const distinctionOfPrimeNumber2 = (num) => {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      ++count;
    }
  }
  if (count >= 2) {
    return 'NO';
  }
  return 'YES';
};

// console.log(distinctionOfPrimeNumber2(2));
// console.log(distinctionOfPrimeNumber2(3));
// console.log(distinctionOfPrimeNumber2(5));
// console.log(distinctionOfPrimeNumber2(4));
// console.log(distinctionOfPrimeNumber2(17));
// console.log(distinctionOfPrimeNumber2(23));
// console.log(distinctionOfPrimeNumber2(29));

const distinctionOfPrimeNumber3 = (num) => {
  if (num === 2) {
    console.log('NO');
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log('NO');
      return false;
    }
  }
  console.log('YES');
};
distinctionOfPrimeNumber3(2);
distinctionOfPrimeNumber3(3);
distinctionOfPrimeNumber3(5);
distinctionOfPrimeNumber3(4);
distinctionOfPrimeNumber3(17);
distinctionOfPrimeNumber3(23);
distinctionOfPrimeNumber3(29);
