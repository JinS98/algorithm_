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

// 정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.
// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
// n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
// n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
// n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
// 올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(n, slicer, num_list) {
    var answer = [];
  if(n === 1){
    return num_list.slice(0,slicer[1]+1)
  }else if(n === 2){
    return num_list.slice(slicer[0])
  }else if(n === 3){
    return num_list.slice(slicer[0],slicer[1]+1)
  }else if(n === 4){
    for(let i = slicer[0]; i <= slicer[1]; i = i + slicer[2]){
      answer.push(num_list[i])
    }
    return answer
  }
}

solution(4,	[1, 5, 2],	[1, 2, 3, 4, 5, 6, 7, 8, 9]	)

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

// 팀의 막내인 철수는 아메리카노와 카페 라테만 판매하는 카페에서 팀원들의 커피를 사려고 합니다. 아메리카노와 카페 라테의 가격은 차가운 것과 뜨거운 것 상관없이 각각 4500, 5000원입니다. 각 팀원에게 마실 메뉴를 적어달라고 하였고, 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 "아무거나"를 적은 팀원의 것은 차가운 아메리카노로 통일하기로 하였습니다.
// 각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return 하는 solution 함수를 작성해주세요. order의 원소는 아래의 것들만 들어오고, 각각의 의미는 다음과 같습니다.
function solution(order) {
    var answer = 0;
    for(let i = 0; i < order.length;i++) {
      if(order[i].includes("americano")){
        answer += 4500
      }else if(order[i].includes("cafelatte")){
        answer += 5000
      }else{
        answer += 4500
      }
    }
    return answer;
}

solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
