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