// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
    var answer = '';
    let b1 = bin1.split("").reverse().join("")
    let b2 = bin2.split("").reverse().join("")
    let num = 0
    for(let i = 0;i < bin1.length;i++) {
      if(b1[i] === '1') {    
        num += (2 ** i)
      }
 
    }
   for(let i = 0;i < bin2.length;i++) {
      if(b2[i] === "1") {      
        num += (2 ** i)
      }
    }
    while(num >= 0) {
      if(num % 2 === 1) {
        answer += "1"
        num  = Math.floor(num / 2)
      }else{
        answer += "0"
        num  = Math.floor(num / 2)
      }
      if(num === 0) {
        break
      }
    }
    return answer.split("").reverse().join("");
}

solution("10",	"11")
solution("1001", "1111")
solution( "100001", "1010101")
