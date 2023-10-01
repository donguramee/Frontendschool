"use strict";

//자바스크립트는 동기적이다
//호이스팅이 된 이후부터 코드가 작성한 순서에 따라 하나하나 실행
//hoisting: var, function declaration(함수선언)

console.log("1");
setTimeout(() => {
  //setTimeout은 비동기
  console.log("2");
}, 1000);
console.log("3");

//내 함수를 나중에 call해줘 라고해서 callback함수라고 함 주로 ()=> 화살표함수로 표현

//Synchronous callback
function printImmedietely(print) {
  print();
}
printImmedietely(() => console.log("hello"));

//Asynchronous callback
function printImmedietely(print, timeout) {
  setTimeout(print, timeout);
}
printImmedietely(() => console.log("async callbacks"), 2000);

//callbackHell exam
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStorage.loginUser(
  id,
  password,
  (user) => {
    UserStorage.getRole(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {}
);

// 콜백지옥의 문제점

// 읽기가 너무 어려움 (가독성이 떨어진다)
// 에러가 발생 혹은 디버깅시에 어느 부분에서 일어난지가 어려워 유지보수에서 불편함
