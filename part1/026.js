/**
 * 문제26 : 행성 문제2
 * 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다
 * 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다
 * 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (word) => {
  transfigurationPlanet2(word);
  rl.close();
}).on('close', () => {
  process.exit();
});

const planets = {
  수성: 'Mercury',
  금성: 'Venus',
  지구: 'Earth',
  화성: 'Mars',
  목성: 'Jupiter',
  토성: 'Saturn',
  천왕성: 'Uranus',
  해왕성: 'Neptune',
};

const transfigurationPlanet = (word) => {
  switch (word) {
    case '수성':
      console.log('Mercury');
      break;
    case '금성':
      console.log('Venus');
      break;
    case '지구':
      console.log('Earth');
      break;
    case '화성':
      console.log('Mars');
      break;
    case '목성':
      console.log('Jupiter');
      break;
    case '토성':
      console.log('Saturn');
      break;
    case '천왕성':
      console.log('Uranus');
      break;
    case '해왕성':
      console.log('Neptune');
      break;
    default:
      console.log('존재하지 않는 행성입니다..');
  }
};

const transfigurationPlanet2 = (word) => {
  // return console.log(planets[word]);
  return console.log(planets[word]);
};
