// p와 y의 개수 구하기
function solution(s) {
  let answer = true;

  let countP = [];
  let countY = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "p" || s[i] == "P") {
      countP.push(s[i]);
    } else if (s[i] == "y" || s[i] == "Y") {
      countY.push(s[i]);
    }
  }

  if (countP.length == countY.length) return (answer = true);
  else return (answer = false);
}
