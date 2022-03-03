// #2. 제일 작은 수 제거하기
function solution(arr) {
  var answer = [];
  if (arr.length > 1) {
    return arr.filter((element) => element !== Math.min.apply(null, arr));
  } else {
    answer.push(-1);
  }
  return answer;
}
