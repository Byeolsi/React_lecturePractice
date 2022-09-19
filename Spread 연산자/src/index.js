const cookie = {
  base: "cookie",
  madeIn: "korea"
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip"
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry"
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

const noTopingCookies = ["촉촉한 쿠키", "안 촉촉한 쿠키"];
const topingCookies = [
  "바나나 쿠키",
  "블루베리 쿠키",
  "딸기 쿠키",
  "초코칩 쿠키"
];

const allCookies = [...noTopingCookies, "함정 쿠키", ...topingCookies];
console.log(allCookies);
