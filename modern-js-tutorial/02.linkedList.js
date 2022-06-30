/**
 * let arr = [obj1, obj2, obj3];
 * 객체를 정렬하여 어딘가에 저장하고 싶다고 가정할 때 가장 먼저 떠오르는 자료 구조는 배열이다.
 *  -> 하지만 배열은 요소 '삭제'와 '삽입'에 들어가는 비용이 많이 드는 문제점이 있다.
 * arr.unshift(obj) 연산을 수행하려면 새로운 obj를 위한 공간을 만들기 위해 모든 요소의 번호를 다시 매겨야 된다. -> 배열이 커지면 연산 수행 시간이 더 걸리게 된다.
 * (arr.shift()를 사용할 때도 마찬가지)
 * 요소 전체의 번호를 다시 매기지 않아도 되는 조작은 배열 끝에 하는 연산인 arr.push/pop 뿐이다. -> 앞쪽 요소에 무언가를 할 때 배열은 꽤 느리다.
 *
 * 빠르게 삽입 혹은 삭제를 해야 할 때는 배열 대신 연결 리스트(linked list)라 불리는 자료 구조를 사용할 수 있다.
 * 연결 리스트의 요소는 객체와 아래 프로퍼티들을 조합해 정의할 수 있다.
 *  - value
 *  - next: 다음 연결 리스트 요소를 참조하는 프로퍼티, 다음 요소가 없을 땐 null이 된다.
 *
 * ------
 *
 * 재귀적으로 정의된 자료구조는 자기 자신을 이용해 자료 구조를 정의한다.
 * -> 재귀적으로 정의된 자료구조에 속하는 연결 리스트는 리스트 혹은 null을 참조하는 객체로 이루어진 데이터 구조를 사용해 정의 된다.
 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// 아래처럼 코드를 작성해도 동일한 연결 리스트가 된다.
let list2 = { value: 1 };
list2.next = { value: 2 };
list2.next.next = { value: 3 };
list2.next.next.next = { value: 4 };
list2.next.next.next.next = null;

// 연결 리스트를 사용하면 전체 리스트를 여러 부분으로 쉽게 나눌 수 있고, 다시 합치는 것도 가능하다.
let secondList = list2.next.next;
list2.next.next = null;
console.log(secondList);
console.log(list2);

// 합치기
list2.next.next = secondList;
console.log(list2);

// 쉽게 요소를 추가/삭제할 수 있다.
let list3 = { value: 1 };
list3.next = { value: 2 };
list3.next.next = { value: 3 };
list3.next.next.next = { value: 4 };

// list3에 새로운 value를 추가
list3 = { value: 'new item', next: list3 };
console.log(list3);

// 중간 요소를 제거하려면 이전 요소의 next를 변경해주면 된다.
// list3.next가 1이 아닌 2를 value로 갖는 객체를 가리키게 만들었다. -> value 1은 체인에서 제외되고, 이 객체는 다른 곳에 따로 저장하지 않으면 자동으로 메모리에서 제거된다.
list3.next = list3.next.next;

/**
 * 연결 리스트의 가장 큰 단점은 번호(인덱스)만 사용하여 요소에 쉽게 접근할 수 없다는 점이다.
 * 배열을 사용하면 arr[n]처럼 번호 n만으로도 원하는 요소에 바로 접근할 수 있는 반면, 연결 리스트에서는 N번째 값을 얻기 위해 첫 번째 항목부터 시작해 N번 next로 이동해야 된다.
 *
 * 중간에 요소를 삽인, 삭제하는 연산이 항상 필요한 것은 아니기 때문에 이럴 때는 순서가 있는 자료형 중에 큐(queue)나 데크(deque)를 사용할 수 있다.(데크를 사용하면 양 끝에서 삽입과 삭제를 빠르게 수행 가능하다.)
 *
 * -----
 *
 * 연결 리스트 개선 방법
 * - 이전 요소를 참조하는 프로퍼티 prev를 추가해 이전 요소로 쉽게 이동하게 할 수 있다.
 * - 리스트이 마지막 요소를 참조하는 변수 tail를 추가할 수 잇다. 다만 이때 주의할 점은 리스트 마지막에 요소를 추가/삭제할 때 tail도 갱신해 줘야 한다.
 * - 이 외에도 요구사항에 따라 구조 변경 가능
 */
