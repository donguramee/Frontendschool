//Promise 는 자바스크립트 내장된 객체
//Promise는 비동기적인 것을 수행할때 callback대신 쓸 수 있음

//state: pennding -> fulfilled or rejected
//Produser vs Consumer

// 1. Produser 제공자
//새로운 promise가 만들어 질때는 전달한 excutor라는 함수가 바로 실행이 됨
const promise = new Promise((resolve, resect) => {
  //promise내에선 헤비한 작업을 함 그런작업들을 동기적으로 작업하면 시간이 무한정으로 늘어나기 때문이다. (network, read files)
  console.log("doing somthing...");
  setTimeout(() => {
    //resolve("ellie");
    resect(new Error("이름을 못받아옴"));
  }, 8000);
});

// 2.Consumers: then, catch, finally
promise
  .then((value) => {
    console.log("value");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(5), 8000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 8000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling 오류를 잘 처리하자
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("😊"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen}=>🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>🍳`), 1000);
  });
getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return "🥖";
  }) //만약 데이터를 불러오지 못한다면 catch로 빵을 출력
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
//하나만 전달받을때는 생략가능
// .then(getEgg)
// .then(cook)
// .then(console.log);
