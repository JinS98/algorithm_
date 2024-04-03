// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
function solution(dots) {
    let arr1 = [dots[0]]
    let arr2 = [dots[0]]
    for(let i = 0; i < dots.length;i++) {
      if(dots[0][0] === dots[i][0] && i !== 0) {
        arr1.push(dots[i])
      }
      if(dots[0][1] === dots[i][1] && i !== 0) {
        arr2.push(dots[i])
      }
    }
    return Math.abs(arr1[0][1] - arr1[1][1]) * Math.abs(arr2[0][0] - arr2[1][0]);
}