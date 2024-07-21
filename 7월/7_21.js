function solution(name, yearning, photo) {
    var answer = [];
    let score = 0
    for(let i = 0; i < photo.length;i++) {
      for(let j = 0; j < photo[i].length;j++) {
        for(let n = 0; n < name.length;n++) {
          if(name[n] === photo[i][j]) {
            score += yearning[n]
          }
        }
        if(j === photo[i].length-1) {
          answer.push(score)
          score = 0
        }
      }
    }
    return answer;
}

// solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])

// solution(["may", "kein", "kain", "radi"],	[5, 10, 1, 3],	[["may"],["kein", "deny", "may"], ["kon", "coni"]])