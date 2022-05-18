/**
 * 문제13 : 몇 번째 행성인가요?
 * 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다.
 * 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
 * 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
 * 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.
 *
 * 입출력
 *  입력 : 1
 *  출력 : 수성
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  // findPlanet(parseInt(line));
  // findPlanet2(parseInt(line));
  findPlanet3(parseInt(line));
  rl.close();
}).on('close', () => {
  process.exit();
});

let planets = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '해왕성',
];

const findPlanet = (num) => {
  switch (num) {
    case 1:
      console.log('수성');
      break;
    case 2:
      console.log('금성');
      break;
    case 3:
      console.log('지구');
      break;
    case 4:
      console.log('화성');
      break;
    case 5:
      console.log('목성');
      break;
    case 6:
      console.log('토성');
      break;
    case 7:
      console.log('천왕성');
      break;
    case 8:
      console.log('해왕성');
      break;
    default:
      console.log('1~8만 입력 가능합니다. ');
      break;
  }
};

const findPlanet2 = (num) => {
  planets.filter((element, idx) => {
    if (++idx === num) {
      return console.log(element);
    }
  });
};

const findPlanet3 = (num) => {
  console.log(planets[num - 1]);
};
