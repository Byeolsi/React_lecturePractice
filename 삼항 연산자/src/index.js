let a = 3;

a >= 0 ? console.log("양수") : console.log("음수");

let b = [];

b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

let c = [1, 2, 3];

const arrayStatus = c.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let d; // undefined

const result = d ? true : false;
console.log(result);

// TODO : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘 다 아니면 F
let score = 100;

score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");
