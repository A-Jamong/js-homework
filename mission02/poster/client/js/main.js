/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// const navi = document.querySelector(".nav");
const ulNavi = document.querySelector("ul");
const nowImage = document.querySelector(".visual img");

function setBgColor(node, color) {
  node = document.querySelector(node);
}

function handleclick(e) {
  const target = e.target.closest("li");
  if (!target) return;

  //인덱스, 컬러값 가져오기
  const targetIndex = target.dataset.index-1;
  const targetColor = `linear-gradient(to bottom, ${
    data[targetIndex].color[0]
  }, ${data[targetIndex].color[1]})`;

  //누른 것만 활성 클래스 넣기
  // const liItem = navi.querySelectorAll("li");
  const liItem = [...ulNavi.children];
  liItem.forEach((item) => item.classList.remove("is-active"));
  target.classList.add("is-active");

  //배경색 바뀌게 하기
  document.body.style.background = targetColor;

  //이미지 바뀌게 하기
  nowImage.src = `./assets/${data[targetIndex].name.toLowerCase()}.jpeg`
}
ulNavi.addEventListener("click", handleclick);
