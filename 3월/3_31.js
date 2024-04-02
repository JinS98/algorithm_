// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
// 스크린샷 2022-07-25 오후 4.49.44.png
// 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(M, N) {
    var answer = 0;
    let col = N
    let row = M
    while(col !== 1) {
      col--
      answer++     
      if(col === 0) break
    }
    answer *= row
    while(row !== 1) {
      row--
      answer++     
      if(col === 0) break
    }
    return answer;
}

solution(2,2)
solution(2,5)