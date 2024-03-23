// 2차원 정수 배열 board와 정수 k가 주어집니다.
// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.
function solution(board, k) {
    var answer = 0;
  for(let i = 0; i < board.length;i++) {
    for(let j = 0; j < board[i].length;j++) {
      if(i+j <= k) {
        answer += board[i][j]
      }
    }
  }
    return answer;
}

solution([[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]],	2)

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
function solution(arr, queries) {
    for(let i = 0; i < queries.length;i++) {
      for(let j = queries[i][0]; j <= queries[i][1];j++ ){
          arr[j] += 1
      }
    }
    return arr;
}

solution([0, 1, 2, 3, 4],	[[0, 1],[1, 2],[2, 3]])

// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, s, e) {
    var answer = '';
    let str = ''
    for(let i = 0;i < s;i++) {
      answer += my_string[i]
    }
    for(let i = e;i >= s;i--) {
      answer += my_string[i]
    }
    for(let i = e+1;i < my_string.length;i++) {
      answer += my_string[i]
    }
    return answer;
}

solution("Progra21Sremm3",6,12)

// 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, indices) {
    var str = my_string.split("");
    let arr = indices.sort((a,b) => a>b?1:-1)
    let b = 0
    for(let i = 0; i < arr.length;i++) {
      let a = str.splice(arr[i] - i,1)
    }
    return str.join("");
}

solution("apporoograpemmemprs",	[1, 16, 6, 15, 0, 10, 11, 3])