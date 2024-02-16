// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 === 1){
      for(let i = 0; i < arr.length;i++) {
        if( i % 2 === 0) {
          answer.push(arr[i] + n)
        }else{
          answer.push(arr[i])
        }
      }
    }else{
      for(let i = 0; i < arr.length;i++) {
        if( i % 2 === 1) {
          answer.push(arr[i] + n)
        }else{
          answer.push(arr[i])
        }
      }
    }
    return answer;
}
solution([49, 12, 100, 276, 33],	27)
solution([444, 555, 666, 777],	100)

// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(todo_list, finished) {
    var answer = [];
  for(let i = 0; i < finished.length; i++) {
    if(finished[i] === false) {
      answer.push(todo_list[i])
    }
  }
    return answer;
}

solution(["problemsolving", "practiceguitar", "swim", "studygraph"],	[true, false, true, false])

// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, alp) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++) {
      if(my_string[i] === alp) {
        answer += my_string[i].toUpperCase()
      }else{
        answer += my_string[i]
      }
    }
    return answer;
}

solution("programmers","p")

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(num_list, n) {
    var answer = [];
    for(let i = n; i < num_list.length;i++) {
      answer.push(num_list[i])
    }
    for(let i = 0; i < n; i++) {
      answer.push(num_list[i])
    }
    return answer;
}

solution([2, 1, 6],	1)
solution([5, 2, 1, 7, 5],	3)

// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.
function solution(names) {
    var answer = [];
    for(let i = 0; i < names.length;i++) {
      if(i % 5 === 0) {
        answer.push(names[i])
      }
    }
    return answer;
}

solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
