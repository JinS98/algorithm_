
function solution(s) {
    let num = 0;
    let answer = ""
  
  for(let i=0;i < s.length;i++){
    for(let j=0;j < s.length;j++){
      if(s[i] === s[j]){
        num += 1
      }
      if(j === s.length-1){
        if(num === 1) {
          answer += s[i]
        }
        num = 0
      }
    }
  }
  
  return answer.split("").sort().join("")
}

solution("abcabcadc")
solution("abdc")

function solution(s) {
    let answer = 0;
    let arr = s.split(" ")
    for(let i=0;i < arr.length;i++) {
      if(arr[i] !== "Z") {
        answer += Number(arr[i])
      }else{
        answer -= Number(arr[i-1])
      }
    }
    return answer;
}

solution("1 2 Z 3")

function solution(my_str, n) {
    let answer = [];
    let string = ""
    let str = my_str.split("")
    for(let i=0;i<str.length;i++) {
      string += str[i]
      if((i+1) % n === 0) {
        answer.push(string)
        string = ""
      }
    }
    if(string !== ""){
      answer.push(string)
    }
    return answer;
}

solution("abc1Addfggg4556b",6)

function solution(numbers, k) {
    var answer = 0;
    
  
    return answer;
}

solution([1, 2, 3, 4], 2)
solution([1, 2, 3, 4, 5, 6], 5)
solution([1, 2, 3], 3)

function solution(num_str) {
    var answer = 0;
  for(let i = 0;i < num_str.length;i++) {
    answer += (Number(num_str[i]))
  }
    return answer;
}

solution("123456789")
solution("1000000")

number = [
  {num : "0", str : "zero"},
  {num : "1", str : "one"},
  {num : "2", str : "two"},
  {num : "3", str : "three"},
  {num : "4", str : "four"},
  {num : "5", str : "five"},
  {num : "6", str : "six"},
  {num : "7", str : "seven"},
  {num : "8", str : "eight"},
  {num : "9", str : "nine"},
]

function solution(numbers) {
    var answer = "";
    let str = ""
    for(let i =0;i < numbers.length;i++) {
      for(let j = 0; j < number.length;j++) {
       
      }
    }
    return answer;
}

solution("onetwothreefourfivesixseveneightnine")