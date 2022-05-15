// # 자연수 뒤집어 배열로 만들기

const solution = (n) =>
  n
    .toString()
    .split("")
    .map((str) => Number(str))
    .reverse();
