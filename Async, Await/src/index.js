function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// async
// 함수 앞에 async를 붙여주면, Promise를 반환하는 비동기 함수가 됨.
// async function helloAsync() {
//   // async가 붙은 함수의 결과값은 Promise의 resolve의 결과값이 됨.
//   return delay(3000).then(() => {
//     return "hello Async";
//   });
// }

// await
// await을 사용하여 비동기 함수를 호출하면, 동기 함수인 것처럼 작동.
// await 키워드는 async 키워드가 붙은 함수 내에서만 사용 가능.
async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  // 반환 값이 Promise가 아닌 return 값이 됨.
  const res = await helloAsync();
  console.log(res);
}

// helloAsync().then((res) => {
//   console.log(res);
// });

main();
