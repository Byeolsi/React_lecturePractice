function isPositive(number, resolve, reject) {
  // resolve와 reject는 콜백 함수
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

function isPositiveP(number) {
  // executor: 비동기 작업을 수행하는 함수
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };

  // new Promise(executor)를 하는 순간, 바로 executor 함수가 수행됨.
  const asyncTask = new Promise(executor);

  // 어떤 함수 Promise 객체를 반환한다는 것은
  // 해당 함수가 비동기 작업을 수행하고,
  // 그 작업의 결과를 Promise 객체로 반환.
  return asyncTask;
}

const res = isPositiveP(10);

// 정상적인 수행
res
  .then((res) => {
    // resolve 함수의 결과를 then을 통해 받아옴.
    // then이 resolve 콜백 함수라고 생각햐면 됨.
    console.log("작업 성공 :", res);
  })
  .catch((err) => {
    // reject 함수의 결과를 catch를 통해 받아옴.
    // catch가 reject 콜백 함수라고 생각하면 됨.
    console.log("작업 실패: ", err);
  });

const err = isPositiveP([]);

// 에러 발생
err
  .then((res) => {
    // resolve 함수의 결과를 then을 통해 받아옴.
    console.log("작업 성공 :", res);
  })
  .catch((err) => {
    // reject 함수의 결과를 catch를 통해 받아옴.
    console.log("작업 실패: ", err);
  });

// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행됨 :", res);
//   },
//   (err) => {
//     console.log("실패 하였음 :", err);
//   }
// );

// isPositive(
//   [],
//   (res) => {
//     console.log("성공적으로 수행됨 :", res);
//   },
//   (err) => {
//     console.log("실패 하였음 :", err);
//   }
// );

function taskA(a, b) {
  // executor를 바로 return
  // return new Promise(executor);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// 콜백 지옥
// taskA(3, 4, (a_res) => {
//   // 3초를 기다렸다가 수행.
//   console.log("task A :", a_res);
//   taskB(a_res, (b_res) => {
//     // 1초를 기다렸다가 수행.
//     console.log("task B :", b_res);
//     taskC(b_res, (c_res) => {
//       // 2초를 기다렸다가 수행.
//       console.log("task C:", c_res);
//     });
//   });
// });

// Promise를 사용하여 콜백 지옥 벗어나기 (콜백 함수를 사용하지 않음)
// taskA(5, 1)
//   .then((a_res) => {
//     console.log("A RESULT :", a_res);
//     // taskB()의 반환 값은 Promise이므로,
//     return taskB(a_res);
//   })
//   .then((b_res) => {
//     console.log("B RESULT :", b_res);
//     return taskC(b_res);
//   })
//   .then((c_res) => {
//     console.log("C RESULT :", c_res);
//   });

// 이렇게 분리해서도 사용 가능
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT :", a_res);
  // taskB()의 반환 값은 Promise이므로,
  return taskB(a_res);
});

console.log("Promise를 이용하면 분리해서 사용 가능!");

bPromiseResult
  .then((b_res) => {
    console.log("B RESULT :", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT :", c_res);
  });
