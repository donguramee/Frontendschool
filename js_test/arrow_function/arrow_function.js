// function foo() {
//   console.log("arrow function");
// }; 이 코드를 화살표함수로 바꾸면 아래의 코드

const foo = () => {
  console.log("arrow function");
};

foo();

// 매개변수가 있을때
const woong = (x) => {
  return x;
};
console.log(woong("arrow"));

// 매개변수가 두개일때
const park = (x, y) => x + y;
console.log(park(1, 5));
