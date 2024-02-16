//정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    let plus = 0;
    let mul = 1
    if(num_list.length >= 11) {
      num_list.forEach((el) => {
        plus  += el
      })
      return plus
    }else {
      num_list.forEach((el) => {
        mul *= el
      })
      return mul
    }
}

solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])
solution([2, 3, 4, 5])

// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
function solution(arr1, arr2) {
    let arr_1 = 0;
    let arr_2 = 0;
    if(arr1.length === arr2.length) {
      arr1.forEach((el) => {
        arr_1 +=el
      })
      arr2.forEach((el) => {
        arr_2 +=el
      })
      if(arr_1 > arr_2) {
        return 1
      }else if(arr_1 < arr_2){
        return -1
      }else{
        return 0
      }
    }else{
      if(arr1.length > arr2.length) {
        return 1
      }else{
        return -1
      }
    } 
}

solution([49, 13],[70, 11, 2])

// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
function solution(n, k) {
    var answer = [];
    for(let i = 1; i <= n;i++) {
      if(i % k === 0) {
        answer.push(i)
      }
    }
    return answer;
}
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
function solution(a, b) {
    if(Number(String(a) + String(b)) === 2 * a * b){
      return Number(String(a) + String(b))
    }else{
      if(Number(String(a) + String(b)) > 2 * a * b){
        return Number(String(a) + String(b))
      }else{
        return 2 * a * b
      }
    }
}
solution(2,91)

// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.
function solution(strArr) {
    var answer = [];
    for(let i = 0; i < strArr.length;i++) {
      if(i % 2 === 0) {
        answer.push(strArr[i].toLowerCase())
      }else{
        answer.push(strArr[i].toUpperCase())
      }
    }
    return answer;
}

solution(["AAA","BBB","CCC","DDD"])

// 어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.
// 문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.
function solution(str1, str2) {
    if(str2.includes(str1)) {
      return 1
    }else{
      return 0
    }
}

solution("abc",	"aabcc")

// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string) {
    return my_string.split(" ")
}

solution("i love you")
solution("loveYou")

// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    let answer = []
    let nums = num_list.sort((a,b) => a < b ? -1 : 1)
    for(let i = 5; i < nums.length;i++) {
        answer.push(nums[i])
    }
    return answer;
}

solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])

// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, index_list) {
    let answer = ""
    for(let i = 0 ; i < index_list.length;i++) {
      answer += my_string[index_list[i]]
    }
    return answer;
}

solution("cvsgiorszzzmrpaqpe",[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])

// 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다. 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만, "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
// 문자열 my_string과 target이 매개변수로 주어질 때, target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, target) {
    if(my_string.includes(target)) {
      return 1
    }else{
      return 0
    }
}

solution("banana",	"ana")

// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(start, end_num) {
    var answer = [];
  for(let i = start;i >= end_num;i--) {
    answer.push(i)
  }
    return answer;
}

solution(10,3)

// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.
function solution(arr) {
    var answer = [];
    for(let i = 0 ; i < arr.length;i++) {
      for(let j = 0 ; j < arr[i];j++) {
        answer.push(arr[i])
      }
    }
    return answer;
}

solution([5, 1, 4])

// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
function solution(myString, pat) {
    var answer = "";
    for(let i = 0; i < myString.length;i++) {
      if(myString[i] === "A") {
        answer += "B"
      }else{
        answer += "A"
      }
    }
    return answer.includes(pat) ? 1 : 0
}

solution("ABBAA","AABB")

// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
function solution(myString) {
    var answer = '';
    let str = myString.toLowerCase()
    for(let i = 0 ; i < str.length;i++) {
      if(str[i] === "a") {
        answer += "A"
      }else{
        answer += str[i]
      }
    }
    return answer;
}

solution("PrOgRaMmErS")

// 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(arr, delete_list) {
    let array = [...arr]
    let answer = []
    for(let i = 0 ; i < arr.length;i++ ){
       for(let j = 0 ; j < delete_list.length;j++) {
         if(arr[i] === delete_list[j]) {
           array[i] = 0
         }
       }
    }
   for(let i = 0 ; i < array.length;i++) {
     if(array[i] !== 0) {
       answer.push(array[i])
     }
   }
     return answer;
 }
 
 // solution( [1, 2, 3, 4, 5, 6 ], [6, 1, 3, 2, 4])
 //[5]
 solution( [1, 3, 2, 4, 5], [1, 2, 3, 4])
 //[5]


