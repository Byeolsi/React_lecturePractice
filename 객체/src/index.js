const person = {
  name: "이정환",
  age: 25,
  say: function () {
    // 백틱을 사용하여 멤버 대입.
    console.log(`안녕, 나는 ${this.name}`); // ${this.["name"]}
  }
}; // 객체 리터럴 방식

// 괄호 표기법이 사용되는 경우
function getPropertyValue(key) {
  return person[key];
}

console.log(getPropertyValue("name"));

// 프로퍼티 추가 - 점 표기법
person.location = "한국";
// 프로퍼티 추가 - 괄호 표기법
person["gender"] = "남성";

// 프로퍼티 수정
person.name = "이정환 A";
person["age"] = 48;

console.log(person);

// 프로퍼티 삭제 방법 - delete
delete person.name;
console.log(person);

delete person["age"];
console.log(person);

// 프로퍼티 삭제 방법 - null
person.location = null;

// 메서드 호출 방법
person.name = "이정환";
person.say();
person["say"]();

// 존재하지 않는 프로퍼티에 대한 접근 -> undefined
console.log(person.notExistProperty);

// 프로퍼티가 존재하는지 확인
console.log(`name : ${"name" in person}`);
console.log(`age : ${"age" in person}`);
