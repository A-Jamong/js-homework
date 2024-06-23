// ### 2. 문제 설명
// 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.
function getNumberAtArray(arr, index) {
  if (arr.constructor !== Array) {
    return console.error(`처음으로 전달될 인자는 배열이어야 합니다!`);
  }
  if (index >= arr.length) {
    console.error("입력한 인덱스가 길이 배열의 길이보다 큽니다!");
  } else if (index < 0) {
    console.error("입력한 인덱스는 유효하지 않습니다!");
  }
  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];
console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
