// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
function solution(common) {
    var answer = 0;
    let a = common[1] - common[0];
    if(common[1] === common[0]) return common[0]
    for(let i = 0; i < common.length;i++) {
      if( i > 1 && common[i] - common[i-1] === a) {
        answer = common[common.length-1]+a
      }else {
        a = (common[2] - common[1])/a
        answer = common[common.length-1]*a
      }
    }
    return answer;
}

solution([1, 2, 3, 4,5,6,7])
solution([2,2,2])

//연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
    let answer = []
    let cen = total / num
    if(cen === Math.floor(cen)) {
      answer.push(cen)
      while(answer.length < num) {
        if(answer.length === 1) {
          answer.unshift(answer[0] - 1)
          answer.push(answer[1] + 1)
        }else{
          answer.unshift(answer[0] - 1)
          answer.push(answer[answer.length-1] + 1)
        }
      }
    }else{
      answer.push(Math.floor(cen))
      answer.push(Math.ceil(cen))
      while(answer.length < num) {
        if(answer.length === 2) {
          answer.unshift(answer[0] - 1)
          answer.push(answer[answer.length-1] + 1)
        }else{
          answer.unshift(answer[0] - 1)
          answer.push(answer[answer.length-1] + 1)
        }
      }
    }
    return answer;
}
