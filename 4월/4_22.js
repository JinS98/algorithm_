// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

function solution(lines) {
    var answer = [];
    let a = []
    let b = []
    let c = []
    let a_1 = []
    let b_1 = []
    let c_1 = []
    for(let i = 0; i < lines.length;i++) {
      for(let j = lines[i][0]; j <= lines[i][1];j++) {
        if(i === 0){
          a.push(j)
        }else if(i === 1) {
          b.push(j)
        }else{
          c.push(j)
        }
      }
    }
    for(let i = 0; i < a.length;i++) {
      if(!isNaN(a[i] + a[i-1])) {
        a_1.push(a[i] + a[i-1])
      }
    }
  for(let i = 0; i < b.length;i++) {
      if(!isNaN(b[i] + b[i-1])) {
        b_1.push(b[i] + b[i-1])
      }
    }
  for(let i = 0; i < c.length;i++) {
      if(!isNaN(c[i] + c[i-1])) {
        c_1.push(c[i] + c[i-1])
      }
    }
  for(let i = 0; i < a_1.length;i++) {
    for(let j = 0; j < b_1.length;j++) {
      if(a_1[i] === b_1[j]) answer.push(a_1[i])
    }
  }
  for(let i = 0; i < a_1.length;i++) {
    for(let j = 0; j < c_1.length;j++) {
      if(a_1[i] === c_1[j]) answer.push(a_1[i])
    }
  }
  for(let i = 0; i < b_1.length;i++) {
    for(let j = 0; j < c_1.length;j++) {
      if(b_1[i] === c_1[j]) answer.push(b_1[i])
    }
  }
   let set = new Set(answer)
  result = [...set]
    return result.length;
}