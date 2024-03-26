// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
    let answer = JSON.parse(JSON.stringify(arr));
    if(arr.length === arr[0].length) {
      return arr
    }else if(arr.length > arr[0].length) {
      for(let i = 0; i < arr.length;i++) {
        for(let j = 0; j < arr.length - arr[i].length;j++) {
          answer[i].push(0)
        }
      }
    }else if(arr.length < arr[0].length) {
      for(let i = 0;i < arr[0].length - arr.length;i++) {
        let array = new Array(arr[0].length).fill(0)
        answer.push(array)
      }
    }
    return answer;
}


solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]])
// solution([[57, 192, 534, 2]])
// solution([[1, 2], [3, 4]])
solution([[1, 2],[2,4],[2,3],[2,3],[1,2],[2,3]])
