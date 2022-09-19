const getName = (person) => {
  // false Not => True
  if (!person) {
    return "객체가 아닙니다";
  }
  return person.name;
};

let person = undefined;
const name = getName(person);
console.log(name);
