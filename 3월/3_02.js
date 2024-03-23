// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
// (x1 ∨ x2) ∧ (x3 ∨ x4)
function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x);
}

solution(false,	true,	true,	true)

// 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(arr) {
    var answer = [];
    let length = 1
    for(let i = 0; i <= 1000; i++) {
      if(length < arr.length) {
        length = length * 2
      }
    }
    for(let i = 0; i < length;i++) {
      if(i < arr.length) {
        answer.push(arr[i])
      }else{
        answer.push(0)
      }
    }
    return answer;
}

solution([1, 2, 3, 4, 5, 6])




// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, arr에 2가 없는 경우 [-1]을 return 합니다.
function solution(arr) {
    var answer = [];
    let two = []
    for(let i = 0;i < arr.length;i++) {
      if(arr[i] === 2) {
        two.push(i)
      }
    }
    for(let i = two[0]; i <= two[two.length-1];i++) {
      answer.push(arr[i])
    }
    if(two[0] === undefined) {
      return [-1]
    }else{
      return answer;
    }

}

solution([1, 2, 1, 4, 5, 2, 9])
solution([1,2,1])
solution([1,1,1])










