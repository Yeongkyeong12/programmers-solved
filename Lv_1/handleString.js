// #7. 문자열 다루기 기본

// 정규 표현식 참고
// ^[0-9]+$: 숫자만 있는지 확인할 때 많이 쓰는 정규표현식
// ^: 시작, $: 종료

function solution(s) {
  return (s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s);
}
