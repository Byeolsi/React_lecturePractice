let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
let [one, two, three] = arr;

// console.log(one, two, three);

// 남은 변수는 값을 할당해주지 않음.
let [a, b, c, d] = ["a", "b", "c"];
console.log(a, b, c, d);
// => a b c undefined

// 기본 값을 할당해줄 수 있음.
let [z, x, v = "v"] = ["z", "x"];
console.log(z, x, v);
// => z x v

// 비 구조화 할당을 이용한 swap
let first = 10;
let second = 20;

console.log(first, second);
// => 10 20
[first, second] = [second, first];
console.log(first, second);
// => 20 10

// 객체 비 구조화 할당
let object = { oneNumber: "one", twoNumber: "two", threeNumber: "three" };

let { oneNumber, twoNumber, threeNumber } = object;
console.log(oneNumber, twoNumber, threeNumber);

// 임의의 변수 이름을 사용하고 싶은 경우, 기본 값을 할당하고 싶은 경우,
let person = { name: "이정환", job: "프로그래머" };

let { name: myName, job, abc = "abc" } = person;
console.log(myName, job, abc);
