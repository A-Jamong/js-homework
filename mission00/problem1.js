// 1. 문제 설명
// 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.
function getValueAtObject(obj, key) {
  // if(typeof(key)!=='string'){
  //   throw Error('찾을 키 값을 문자여야 합니다.');
  // } //* 애초에 선언되지 않은 변수를 인자로 전달하는 순간부터 오류가 나는구나!!!!
  if (obj.hasOwnProperty(key)) {
    return obj[key]; //* 오.. 여기서 obj.key 하니까 undefined 가 나오는데 왜 그러더라. 다시 봐야겠당. -> .key key라는 속성에 접근 [key]는 key변수 안에 있는 값으로 접근
  } else {
    return console.error(`ERROR! 이 객체에는 ${key}라는 속성이 없습니다`);
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "agde")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !
