// 가운데 글자 가져오기
function solution(s) {
  var answer = "";
  if (s.length % 2 == 1) {
    answer = s[parseInt(s.length / 2)];
  } else {
    answer = s[parseInt(s.length / 2) - 1].concat(s[parseInt(s.length / 2)]);
  }
  return answer;
}
