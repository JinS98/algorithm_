// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.
function solution(arr, flag) {
    var answer = [];
    for(let i = 0;i < flag.length;i++) {
      if(flag[i] === true) {
        for(let j = 0; j < arr[i] * 2;j++) {
          answer.push(arr[i])
        }
        }else{
          for(let k = 0; k < arr[i];k++){
            answer.pop()
          }
      }
    }
    return answer;
}

solution([3, 2, 4, 1, 3],	[true, false, true, false, false])

// 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.
// 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0;i < intStrs.length;i++) {
      let a = Number(intStrs[i].split("").splice(s,l).join(""))
      if(a > k) {
        answer.push(a)
      }
    }
    return answer;
}

solution(["0123456789","9876543210","9999999999999"],	50000,	5,5)

// 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
function solution(myString, pat) {
    var answer = myString;
    let str = myString.split("")
    for(let i = myString.length-1; i => 0;i = i - pat.length) {
        let result = str.slice(-(pat.length))
        console.log(str,result)
        if(result.join("") === pat){
            return str.join("") 
        }else{
          str.pop()
        }
    }
}

solution("AbCdEFG",	"dE")
// solution("AAAAaaaaa",	"aaaaa")
solution("ass",	"a")

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
function solution(arr, queries) {
    var answer = arr;
    let index = 0
    let num = 0
    for(let i = 0; i < queries.length;i++) {
      for(let j = 0; j < queries[i].length;j++) {
        if(j % 2 === 0) {
          index = queries[i][j]
          num = answer[queries[i][j]]
         answer[queries[i][j]] = answer[queries[i][j+1]]
        }else{
          answer[queries[i][j]] = num
        }
      }
    }
    return answer;
}

solution([0, 1, 2, 3, 4],	[[0, 3],[1, 2],[1, 4]])