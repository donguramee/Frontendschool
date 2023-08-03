function add(x, y) {
  return x + y;
}

add(1, 2);
//문제1: 더하기, 빼기, 나누기, 곱하기를 하는 함수를 만들어 주세요.

//문제2: '10,000,000,000'와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어 주세요.
function stringToNumber(str) {
  let answer = parseInt(str.replaceAll(",", ""));
  return answer;
}

//문제3: 입력된 문자열을 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
//입력: world
//출력: ['w', 'o', 'r', 'l', 'd']

function printAndSplit(str) {
  console.log(str);
  return str.split("");
}
let value = printAndSplit("world");

//문제4: 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어 주세요.
//입력: 1, 2
//출력: (1 + 2) * (1 + 2) = 9

function 