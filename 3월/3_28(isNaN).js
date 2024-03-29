// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, overwrite_string, s) {
    var answer = my_string.split("");
    for(let i = s; i <= my_string.length;i++) {
      for(let j = 0 ;j < overwrite_string.length;j++) {
        if(i - j === s) {
          answer[i] = overwrite_string[j]
        }
      }
    }
    return answer.join("");
}

solution("He11oWor1d",	"lloWorl",	2)
solution("Program29b8UYP",	"merS123",	7)

//JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
function solution(s) {
    var answer = s.toLowerCase().split("");
    for(let i = 0 ;i < s.length;i++) {
      if(i === 0 && isNaN(s[i])) {
        answer[i] = s[i].toUpperCase()
      }else if(s[i] === " "){
        if(s[i+1] === undefined) return answer.join("")
        answer[i+1] = s[i+1].toUpperCase()
      }
    }
    return answer.join("");
}

solution("3people unFollowed me")
solution("  for the what 1what  ")