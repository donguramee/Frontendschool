// resolve 성공

function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "Hello Hello";
    resolve(hello);
  });
}

sayHello().then((resolveData) => {
  console.log(resolveData);
});
