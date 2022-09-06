const arr = [1, 2, 3, 4];

// forEach 내장 함수를 이용한 배열 순회
arr.forEach((elm) => console.log(elm));
/*
arr.forEach(function (elm) {
  console.log(elm);
})
*/

// map 내장 함수
const newArr = arr.map((elm) => {
  return elm * 2;
});
console.log(newArr);
/*
const newArr = [];
arr.forEach((elm) => newArr.push(elm * 2));
console.log(newArr);
*/

// includes 내장 함수
let number = 3;
console.log(arr.includes(number));
/*
let number = 3;
arr.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  }
});
*/

// indexOf 내장 함수
console.log(arr.indexOf(number));
number = "3";
console.log(arr.indexOf(number));

// findIndex 내장 함수
// 배열의 요소에 접근하여 조건에 맞는 인덱스를 찾음.
const arrColor = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "blue" }
];
console.log(arrColor.findIndex((elm) => elm.color === "green"));

// find 내장 함수
// 배열의 요소에 접근하여 조건에 맞는 요소를 찾음.
console.log(arrColor.find((elm) => elm.color === "green"));

// filter 내장 함수
// 특정 조건을 충족하는 요소만을 추려내어 새로운 배열을 반환.
console.log(arrColor.filter((elm) => elm.color === "blue"));

// silce 내장 함수
// 0번 인덱스부터 2번 인덱스 전까지(0 <= i < 2) 배열을 잘라내어 반환.
console.log(arrColor.slice(0, 2));

// concat 내장 함수
// 앞 배열과 뒤 배열을 하나로 합침.
const arrColor1 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" }
];
const arrColor2 = [
  { num: 4, color: "green" },
  { num: 5, color: "blue" }
];
console.log(arrColor1.concat(arrColor2));

// sort 내장 함수
let chars = ["나", "다", "가"];
chars.sort();
console.log(chars);
/* 숫자는 불가능
let numbers = [0, 1, 3, 2, 10, 30, 20];
number.sort();
console.log(numbers);
*/

// sort의 비교함수
// 비교함수를 통해, 숫자도 정렬 가능.
let numbers = [0, 1, 3, 2, 10, 30, 20];
const compare = (a, b) => {
  if (a > b) {
    // 크다
    return 1;
    // "1"은 a가 b보다 뒤로 가야 한다는 의미.
  }
  if (a < b) {
    // 작다
    return -1;
    // "-1"은 a가 b보다 앞으로 가야 한다는 의미.
  }
  // 같다
  return 0;
  // "0"은 자리를 바꾸지 않음.
};
numbers.sort(compare);
console.log(numbers);

// join 내장 함수
const strings = ["이정환", "님", "안녕하세요", "또오셨군요"];
// 기본은 쉼표로 구분.
console.log(strings.join());
// 구분하는 문자열을 임의로 수정할 수 있음.
console.log(strings.join(" "));
