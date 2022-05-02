// #14. 자릿수 더하기
function solution(n) {
  // 정수값 n을 string화시킨 뒤 더해주기
  let answer = String(n)
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);

  return answer;
}
