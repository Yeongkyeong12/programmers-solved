// #4. x만큼 간격이 있는 n개의 숫자

// 방법1
function solution(x, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push((i + 1) * x);
  }
  return answer;
}

// 방법2
function solution(x, n) {
  return n === 1 ? [x] : [...solution(x, n - 1), x * n];
}
