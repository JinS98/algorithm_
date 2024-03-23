// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]
function solution(arr) {
    var answer = 0;
    for(let i =0; i < arr.length;i++) {
      for(let j = 0; j < arr.length;j++) {
        if(arr[i][j] !== arr[j][i]) {
          answer = 0
          return answer
        }
        if(arr[i][j] === arr[j][i]){
          answer = 1
        }
      }
    }
    return  answer;
}

solution([[5, 192, 33], [192, 72, 95], [33, 95, 999]])
solution([[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]])

// 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
function solution(arr) {
    return arr.join("");
}

solution(["a","b","c"])

// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
function solution(binomial) {
    let sum = (a,b) => {
      answer = a + b
    }

    let mul = (a,b) => {
      answer = a * b
    }

    let sub = (a,b) => {
      answer = a - b
    }
  var answer = 0;
  arr = ((binomial).split(" "))
  for(let i = 0; i < arr.length;i++) {
     if(arr[i] === "+"){
      sum(Number(arr[0]), Number(arr[2]))
    }else if(arr[i] === "-"){
      sub(Number(arr[0]), Number(arr[2]))
    }else if(arr[i] === "*"){
      mul(Number(arr[0]), Number(arr[2]))
    }
  }
  return answer;
}

solution("43 + 12")

// 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.
// intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.
// 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
function solution(arr, intervals) {
    var answer = [];
    for(let i = intervals[0][0]; i <=intervals[0][1]; i++) {
      answer.push(arr[i])
    }
  for(let i = intervals[1][0]; i <=intervals[1][1]; i++) {
      answer.push(arr[i])
    }
    return answer;
}

solution([1, 2, 3, 4, 5],	[[1, 3], [0, 4]])

// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string) {
    var answer = [];
    for(let i = 0; i < my_string.length;i++) {
      answer.push(my_string.slice(i))
    }
    return answer.sort((a,b) => a>b?1:-1);
}

solution("banana")

// 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.
// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
function solution(numLog) {
    var answer = '';
    for(let i = 0; i < numLog.length;i++) {
      if(numLog[i+1] - numLog[i] === 1) {
        answer += "w"
      }else if(numLog[i+1] - numLog[i] === -1){
        answer += "s"
      }else if(numLog[i+1] - numLog[i] === 10){
        answer += "d"
      }else if(numLog[i+1] - numLog[i] === -10){
        answer += "a"
      }
    }
    return answer;
}

solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])

// 문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.
function solution(myString) {
    var answer =myString.split("x")
    let array = []
    for(let i = 0; i < answer.length;i++) {
      if(answer[i] !== "") {
        array.push(answer[i])
      }
    }
  return array.sort((a,b) => a>b?1:-1)
}

solution("axbxcxdx")
solution("dxccxbbbxaaaa")
solution("xasdxas")
solution("xaxxxsdxas")

// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
function solution(a, b, c) {
    var answer = 0;
    if(a !== b && a!== c && b!==c) {
      return a + b + c
    }else if(a == b && a == c && b ==c) {
      return (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c)
    }else{
      return (a+b+c)*(a*a+b*b+c*c)
    }
    return answer;
}

solution(2,6,1)
solution(5,3,3)
solution(5,3,6)

// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
function solution(number) {
    sum = 0
    for(let i = 0;i < number.length;i++) {
      sum += Number(number[i])
    }
    return sum % 9;
}

solution("123")
solution("78720646226947352489")

// 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, m, c) {
    var answer = '';
    for(let i = 0; i< my_string.length;i++) {
      if(i % m === c-1) {
        answer += my_string[i]
      }
    }
    return answer;
}

solution("ihrhbakrfpndopljhygc",	4,	2)