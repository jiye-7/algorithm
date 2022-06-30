/**
 * 재귀는 재귀적 순회(recursive traversal)를 구현할 때 사용하면 좋다.
 *
 * ------------------------------------------------------------
 *
 * 부서에는 여려 명의 직원이 있는데, 이를 배열로 표현
 *  -> sales 부서의 John, Alice라는 2명의 직원을 배열 요소로 표현
 *
 * 부서는 하위 부서를 가질 수 있다. development 부서는 sites, internals 라는 2개의 하위 부서를 갖는다. 하위 부서에도 직원이 있다.
 *
 * 하위 부서가 커지면 더 작은 단위의 하위 부서(또는 팀)로 쪼개질 가능성도 있다.
 *  -> sites 부서는 미래에 siteA, siteB, siteC, ... 세분화 될 수 있기 때문에 가능성을 염두해 둬야 한다.
 *
 * ------------------------------------------------------------
 *
 * Q) 이제 모든 임직원의 급여를 더한 값을 구해야 한다면? -> 재귀를 이용한 풀이법 시도
 *
 * 임직원 급여 합계를 구할 때 두 가지 경우로 나누어 생각할 수 있다.
 *
 * 1. 임직원 배열을 가진 '단순한' 부서 -> 간단한 반복문으로 급여 합계를 구할 수 있다.
 *  => 배열을 사용하는 첫 번째 경우는 간단한 경우로, 재귀의 베이스가 된다.
 *
 * 2. N개의 하위 부서가 있는 객체 -> 각 하위 부서에 속한 임직원의 급여 합계를 얻기 위해 N번의 재귀 호출을 하고, 최종적으로 모든 하위 부서 임직원의 급여를 더한다.
 *  => 객체를 사용하는 두 번째 경우는 재귀 단계가 된다. 복잡한 작업은 작은 작업(하위 부서에 대한 반복문)으로 쪼갤 수 있다. 부서의 깊이에 따라 더 작은 작업으로 쪼갤 수 있는데,
 * 결국 마지막엔 첫 번째 경우가 된다.
 */
let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  // 첫 번째 경우
  if (Array.isArray(department)) {
    // 배열의 요소를 합함
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    // 두 번째 경우
    let sum = 0;
    // Object.values는 프로퍼티의 값이 담긴 배열을 반환한다.
    for (let subDep of Object.values(department)) {
      sum += sumSalaries(subDep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700
