// reject 실패

function sayHello() {
  return new Promise((resolve, reject) => {
    reject(new Error());
  });
}

sayHello()
  .then((resolveData) => {
    console.log(resolveData);
  })
  .then((resolveData) => {
    console.log(resolveData);
  })
  .then((resolveData) => {
    console.log(resolveData);
  })
  .catch((error) => {
    console.log(error);
  });
