// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
function solution(polynomial) {
    var answer = '';
    let arr = polynomial.split(" ")
    let x = 0
    let x_num = 0
    let num = 0
    for(let i = 0; i < arr.length;i++) {
      if(!isNaN(Number(arr[i]))) num += Number(arr[i])
      if(arr[i].includes('x')){
        x = Number(arr[i].slice(0, arr[i].length-1))
        if(x === 0) x = 1
      }
      x_num += x
      x = 0
    }
    if(x_num === 0) {
      return String(num)
    }else if(num === 0){
      if(x_num === 1) return 'x'
      return x_num + 'x'
    }else{
      if(x_num === 1) return 'x' + " + " + String(num)
      return x_num + 'x' + " + " + String(num)
    }
    
    return answer;
}