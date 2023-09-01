const hello = "first hello";
// hello = "second hello"; >>밖에서 선언된 hello는 위의 hello와 중복됨.
if (true) {
  const hello = "second hello"; //중괄호안에서 선언된 hello는 다른 hello
  console.log(hello);
}

console.log(hello);
