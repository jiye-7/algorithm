/**
 * # 문제40 : 놀이동산에 가자
 * 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다.
 * 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.
 * 원범이와 친구들이 총 몇명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
 * 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
 * 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.
 *
 * 입력
 *  50 (제한 무게)
 *  5 (인원 수)
 *  20 (탑슬할 사람의 무게1)
 *  20 (탑슬할 사람의 무게2)
 *  20 (탑슬할 사람의 무게3)
 *  20 (탑슬할 사람의 무게4)
 *  20 (탑슬할 사람의 무게5)
 *
 * 출력
 *  2
 */
let input = [100, 5, 20, 20, 20, 20, 20];

const weightPass = (val) => {
  let limitWeight = val[0]; // 제한 무게 값
  let sumOfWeight = 0; // 누적 무게 값
  let numberOfPeople = 0; // 통과 인원 수

  for (let i = 2; i < val.length; i++) {
    /* if (sumOfWeight + val[i] <= limitWeight) {
      sumOfWeight += val[i];
      ++numberOfPeople;
    } */
    sumOfWeight += val[i];

    if (sumOfWeight <= limitWeight) {
      ++numberOfPeople;
    }
  }
  return numberOfPeople;
};

console.log(weightPass(input));
