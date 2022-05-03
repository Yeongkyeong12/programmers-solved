// #15. 소수 구하기
function solution(n) {
  let arr = [];
  let cnt = 0;
  for (let i = 0; i < n + 1; i++) {
    arr.push(true);
  }

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (var j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) cnt++;
  }

  return cnt++;
}
