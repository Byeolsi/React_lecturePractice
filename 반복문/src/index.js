for (let i = 1; i <= 100; i++) {
  // 반복 수행할 코드
  console.log("winterlood");
}

let person = {
  name: "이정환",
  age: 25,
  tall: 175
};

// 객체의 키들을 배열의 형태로 가져옴.
const personKeys = Object.keys(person);
console.log(personKeys);

// 키를 이용하여 값을 가져올 수 있음.
for (let i = 0; i < personKeys.length; i++) {
  const curKey = personKeys[i];
  const curValue = person[curKey];

  console.log(`${curKey}: ${curValue}`);
}

// 바로 값만을 가져올 수도 있음.
const personValues = Object.values(person);
for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}
