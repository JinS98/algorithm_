// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
function solution(a, d, included) {
    var answer = 0;
    let num = 0
    for(let i = 0; i< included.length;i++) {
      if(i === 0) {
        num = a
      }else{
        num += d
      }
      if(included[i] === true) {
        answer += num
      }
    }
    return answer;
}

solution(3,	4,	[true, false, false, true, true])

// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
function solution(str1, str2) {
    var answer = '';
    for(let i = 0; i < str1.length;i++) {
      answer += str1[i]
      answer += str2[i]
    }
    return answer;
}

solution("aaaaa",	"bbbbb")

// 정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.
function solution(date1, date2) {
    var answer = 0;
    for(let i = 0; i < date1.length;i++) {
      if(date1[0] < date2[0]) {
           return 1
         }else if(date1[0] > date2[0]) {
           return 0
         }else {
            if(date1[1] < date2[1]) {
           return 1
           }else if(date1[1] > date2[1]) {
           return 0
           }else{
               if(date1[2] < date2[2]) {
               return 1
               }else if(date1[2] > date2[2]) {
           return 0
         }else{
                 return 0
               }
           }
         }
    }
    return answer;
}

solution([2021, 12, 28],	[2021, 12, 29])
solution([2021, 12, 28],	[2020, 12, 29])


