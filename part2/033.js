/**
 * 문제33 : 거꾸로 출력하기
 * 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
 *
 * 입출력
 *  입력 : 1 2 3 4 5
 *  출력 : 5 4 3 2 1
 *
 *  입력 : 2 4 6 7 8
 *  출력 : 8 7 6 4 2
 */
// 1
const reverseNumber = (numbers) => {
  let numArr = String(numbers).split('');
  let reverseNum = '';

  for (let i = numArr.length; i > 0; i--) {
    reverseNum += numArr[i - 1] + ' ';
  }
  return reverseNum;
};
console.log(reverseNumber(parseInt(12345)));
console.log(reverseNumber(parseInt(24678)));

// 2
const reverseNumber2 = (numbers) => {
  return numbers.split(' ').reverse().join(' ');
};
console.log(reverseNumber2('1 2 3 4 5'));

// 3
const reverseNumber3 = (nums) => {
  const arr = nums.split(' ').reverse();
  let reverseNumber = '';

  for (let i = 0; i < arr.length; i++) {
    reverseNumber += arr[i] + ' ';
  }
  return reverseNumber;
};
console.log(reverseNumber3('1 2 3 4 5'));
