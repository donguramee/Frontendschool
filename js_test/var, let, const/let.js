//let
//값을 재정의 할 수 없는 변수 선언 방식
let hello = "first hello";

if (true) {
  let hello = "second hello";
  console.log(hello);
}
console.log(hello);
