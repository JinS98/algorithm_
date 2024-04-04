// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    let num = n
    if (num < 3) return num;
    let tb3 = ""
    while(num >= 3) { 
      tb3 += String(num%3)
      num = Math.floor(num/3)
    }
  if(num !== 0) tb3 = (tb3 + Math.floor(num)).split("").reverse()
    for(let i = 0; i < tb3.length;i++) {
      if(i === 0) {
        answer += Number(tb3[i])
      }else{
        answer += 3 ** i * tb3[i]
      }
    }
    return answer;
}

solution(100000000)
solution(45)
solution(125)