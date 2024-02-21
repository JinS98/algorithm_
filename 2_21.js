// 수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_strings, parts) {
    var answer = '';
    for(let i = 0; i < parts.length;i++) {
      for(let j = parts[i][0]; j <= parts[i][1];j++) {
        answer += my_strings[i][j]
      }
    }
    return answer;
}

solution(["progressive", "hamburger", "hammer", "ahocorasick"],	[[0, 4], [1, 2], [3, 5], [7, 7]])

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < num_list.length;i++) {
      if(i % n === 0) {
        answer.push(num_list[i])
      }
    }
    return answer;
}

solution([4, 2, 6, 1, 7, 6],	2)

// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
function solution(myString) {
    let answer = [];
    let num = 0
    for(let i = 0; i < myString.length;i++) {
      if(myString[i] !== "x"){
        num += 1
      }else{
        answer.push(num)
        num = 0
      }
    }
    answer.push(num)
    return answer;
}

solution("oxooxoxxox")
solution("xabcxdefxghi")

// 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.
// a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
// 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
function solution(a, b) {
    let answer = 0;
    if(a%2 === 1 && b%2 === 1) {
      return a*a + b*b
    }else if(a%2 === 1 || b%2 === 1){
      return 2 * (a + b)
    }else{
      return Math.abs(a - b)
    }
}

solution(3,	5)

// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.
// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(str_list, ex) {
    var answer = '';
    for(let i = 0; i < str_list.length;i++) {
      if(!(str_list[i].includes(ex))) {
         answer += str_list[i]
      }
    }
    return answer;
}

solution(["abc", "def", "ghi"],	"ef")

// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(n_str) {
    var answer = '';
    let arr = n_str.split("")
    let i = 0
    while(i < n_str.length){
      if(arr[0] !== "0"){
        break
      }
      arr.shift()
    }
    return arr.join("");
}

solution("0010")

// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.
function solution(strArr) {
    let answer = [];
    for(let i = 0 ; i < strArr.length;i++) {
      if(!(strArr[i].includes("ad"))){
        answer.push(strArr[i])
      } 
    }
    return answer;
}

solution(["and","notad","abcd"])

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.
function solution(myString) {
    var answer = '';
    console.log('l'.charCodeAt())
    for(let i = 0; i < myString.length;i++) {
      if(myString[i].charCodeAt() < 108) {
        answer += "l"
      }else{
        answer += myString[i]
      }
    }
    return answer;
}

solution("abcdevwxyz")

// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
function solution(arr, idx) {
    var answer = 0;
    for(let i = idx; i < arr.length;i++) {
      if(arr[i] === 1 ){
        return i 
      }
    }
    return -1;
}

solution([0, 0, 0, 1], 1)
solution([1, 0, 0, 1, 0, 0])

// 모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.
// 그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.
// 계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.
// 임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.
function solution(n) {
    var answer = [];
    answer.push(n)
    while( n >= 0 ) {
       if(n === 1){
         break
       }else if(n % 2 === 0) {
         n = n / 2
         answer.push(n)
       }else if(n % 2 === 1){
         n = 3 * n + 1
         answer.push(n)
       }
    }
    return answer;
}

solution(10)

// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
function solution(n) {
    const arr = Array.from(Array(n), () => new Array(n).fill(0))
    for(let i = 0; i < n;i++) {
      arr[i][i] = 1
    }
    return arr
}

solution(3)
solution(6)