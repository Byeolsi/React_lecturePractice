console.log(false && true);
console.log(true || false);
console.log(!true);

// const getName = (person) => {
//   if (!person) {
//     return "객체가 아닙니다.";
//   }
//   return person.name;
// };
// const getName = (person) => {
//   return person && person.name;
// };
// 앞에 값이 falsy 하다면, 뒤의 값를 보지 않고 그 값을 그대로 반환.
// 그렇기에 person.name에 접근하는 코드가 있더라도 문제 없음.
const getName = (person) => {
  const name = person && person.name; // 이정환
  return name || "객체가 아닙니다.";
};

let person = { name: "이정환" };
const name = getName(person);
console.log(name);
