// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
function solution(strArr) {
    var answer = 0;
    let arr = []
    for(let i = 0; i < strArr.length;i++) {
      arr.push(strArr[i].length)
    }
     let frequency = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
    }, {});
    return Math.max(...Object.values(frequency));
}

solution(["a","bc","d","efg","hi"])
solution(["bc","d","efg","hi"])

// 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(q, r, code) {
    var answer = '';
    for(let i = 0;i < code.length;i++) {
      if(i % q === r){
        answer += code[i]
      }
    }
    return answer;
}

solution(3,	1,	"qjnwezgrpirldywt")



solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
