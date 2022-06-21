/**
 * 문제50 : 버블정렬 구현하기
 *  버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다.
 *  시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
 *  아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
 */
function bubble(arr) {
  let result = arr
    .split(' ')
    .map((el) => parseInt(el, 10))
    .slice();
  let temp = 0;

  for (let i = 0; i < result.length - 1; i++) {
    // 빈칸을 채워주세요
    // 두 번재 for문이 한 번 회전할 때 마다 배열 안의 원소가 제일 큰것부터 1개씩 자리를 '확정적'으로 잡기 때문에
    // 연산 시간을 아끼는 측면에서 -1이 아닌  i값을 빼면서 for문이 돌아아하는 횟수를 줄인 것.
    for (let j = 0; j < result.length - i; j++) {
      // result[j+1]이 undefined가 되더라도 비교 연산자(>)에서 false를 반환하기 때문에 전체 알고리즘에는 영향이 없지만, 조건문에서 result.length - i - 1을 주는 방법을 사용할 수도 있다.
      if (result[j] > result[j + 1]) {
        //빈칸을 채워주세요.
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = '10 3 5 9 2';
console.log(bubble(items));
