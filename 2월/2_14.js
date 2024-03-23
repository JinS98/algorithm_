function solution(num_list, n) {
    var answer = [];
    for(let i = 0;i < n;i++) {
      answer.push(num_list[i])
    }
    return answer;
}

solution([2,1,6], 1)
solution([5, 2, 1, 7, 5], 3)

function solution(start_num, end_num) {
    var answer = [];
    for(let i = start_num;i <= end_num;i++) {
        answer.push(i)
    }
    return answer;
}

solution(3,10)

//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
    var answer = '';
  for(let i = my_string.length-n;i < my_string.length;i++) {
    answer += (my_string[i])
  }
    return answer;
}

solution("ProgrammerS123", 11)
solution("He110W0r1d", 5)

//정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
function solution(arr) {
    var answer = [];
  for(let i =0; i <arr.length;i++) {
    if(arr[i] >= 50 && arr[i]%2 === 0) {
      answer.push(arr[i]/2)
    }else if(arr[i] < 50 && arr[i]%2 === 1){
      answer.push(arr[i]*2)
    }else{
      answer.push(arr[i])
    }
  }
    return answer;
}

//'m'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(rny_string) {
    var answer = '';
    for(let i = 0;i < rny_string.length;i++) {
      if(rny_string[i] === "m") {
        answer += "rn"
      }else{
        answer += rny_string[i]
      }
    }
    return answer;
}

solution("master")

//정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// .sort((a,b) => a<b ? -1 : 1) 오름차순
function solution(num_list) {
    return num_list.sort((a,b) => a<b ? -1 : 1).slice(0,5) ;
}

solution([12, 4, 15, 46, 38, 1, 14])

//정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
function solution(numbers, n) {
    var answer = 0;
  for(let i = 0; i < numbers.length;i++) {
    answer += numbers[i]
    if(answer > n) {
      return answer
    }
  }
}
solution([34, 5, 71, 29, 100, 34],123)

//정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    let a = ""
    let b = ""
   for(let i = 0; i < num_list.length;i++){
     if(num_list[i] % 2 === 0) {
       a += String(num_list[i])
     }else{
       b += String(num_list[i])
     }
   }
     return Number(a) + Number(b);
 }
 
 solution([3, 4, 5, 2, 1])

 //알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.
function solution(myString, pat) {
    let str = myString.toLowerCase();
    let p = pat.toLowerCase()
      if(str.includes(p)) {
        return 1
      }else{
        return 0
      }
    return str;
}

solution("AbCdEfG", "aBc")
solution("AbCdEfG", "ac")

//정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

function solution(n, control) {
    var answer = n;
    for(let i =0;i < control.length;i++) {
      if(control[i] === "w"){
        answer += 1
      }else if(control[i] === "s"){
        answer -= 1
      }else if(control[i] === "d"){
        answer += 10
      }else if(control[i] === "a"){
        answer -= 10
      }
    }
    return answer;
}

solution(0, "wsdawsdassw")

//어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, is_suffix) {
    var answer = 0;
    let string = my_string
    for(let i = 0; i <= my_string.length;i++) {
      if(string === is_suffix){
        return 1
      }
        string = string.slice(1)
      if(string === is_suffix){
        return 1
      }
      
    }
    return 0
}

solution("banana","a")
solution("asdasd", "asdasd")
solution("asdasd", "dd")
