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