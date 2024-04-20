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