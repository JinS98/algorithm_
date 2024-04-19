// 정수 배열 arr와 query가 주어집니다.
// query를 순회하면서 다음 작업을 반복합니다.
// 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
// 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
// 위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(arr, query) {
    var answer = [];
    for(let i = 0; i < query.length;i++) {
      if(i%2 === 0) {
        arr.splice(query[i]+1)
      }else{
        arr = arr.splice(query[i])
      }
    }
    return arr;
}

solution([0, 1, 2, 3, 4, 5],	[4, 1, 2])

// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
function solution(array) {
    var answer = [];
    let arr = []
    for(let i = 0;i < array.length;i++){
      if(arr[array[i]] === undefined){
        arr[array[i]] = 1
      }else{
        arr[array[i]]++
      } 
    }
  for(let i = 0; i < arr.length;i++) {
    if(!arr[i]) arr[i] = 0
  }
    let max = Math.max(...arr)
    arr.forEach((el, idx) => {
      if(max === el) {
        answer.push(idx)
      }
    })
    if(answer.length !== 1) {
      return -1
    }else{
      for(let i = 0; i < arr.length;i++) {
        if(max === arr[i]) return i
      }
    }
}