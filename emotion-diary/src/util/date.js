export const getStringDate = (date) => {
  // toISOString()은 날짜와 시간을 문자열 형태로 반환함.
  // slice()를 통해 날짜 부분만을 가져옴.
  return date.toISOString().slice(0, 10);
};
