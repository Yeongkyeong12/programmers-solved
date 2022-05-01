// #13. 정수 내림차순으로 배치하기
function solution(n) {
  // n을 문자열화한다.
  const nString = String(n);
  // n을 배열에 넣는다.
  const nArray = [];
  for (let i = 0; i < nString.length; i++) {
    nArray.push(nString[i]);
  }
  // 내림차순 정렬시킨다.
  nArray.sort((a, b) => b - a);
  return parseInt(nArray.join(""));
}
