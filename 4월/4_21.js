// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c, d) {
    let nums = [a,b,c,d]
    let same = 0
    let num1 = 0
    let num2 = 0
    let num3= []
    var answer = 0;
    if(a === b && b === c && c === d){
      return 1111 * a
    }else if(a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
      return Math.min(...nums)
    } else {
        for(let i = 0; i < nums.length;i++) {
          same = 0
  for(let j = 0; j < nums.length;j++) {
    if(i !== j) {
      if(nums[i] === nums[j]) {
        same++
          if(same === 1) {
          num1 = nums[i]
          for(let k = 0;k < nums.length;k++) {
            if(nums[i] !== nums[k]){
              num3.push(nums[k])
            } 
          } 
          if(num3.length === 1) {
             for(let k = 0;k < nums.length;k++) {
            if(nums[i] !== nums[k]) num2 = nums[k]
          } 
          return ((10*num1+num2)**2)
          }
          if(num3[0] === num3[1]) {
            return (num1 + num3[0]) * Math.abs(num1 - num3[0])
          }else{
            return num3[0] * num3[1]
          }
        }
      }
    }
  }
}
    }
}