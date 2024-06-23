const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

//* email 정규표현식을 사용한 검증
const emailInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");

emailInput.addEventListener("input", (e) => {
  // 메일 입력하면서 검증
  if (emailReg(e.target.value)) {
    emailInput.classList.remove("is--invalid"); //검증완료
  } else {
    emailInput.classList.add("is--invalid");
  }
});

//* pw 정규표현식을 사용한 검증
pwInput.addEventListener("input", (e) => {
  // Pw 입력하면서 검증
  if (pwReg(e.target.value)) {
    pwInput.classList.remove("is--invalid"); //검증완료
  } else {
    pwInput.classList.add("is--invalid");
  }
});

//* 상태 변수 관리

//* 로그인 버튼 클릭시 조건 처리
const loginBtn = document.querySelector(".btn-login");
loginBtn.addEventListener("click", loginSubmit);

function loginSubmit(e) {
  e.preventDefault();
  if (
    !emailInput.classList.contains("is--inavalid") &&
    !pwInput.classList.contains("is--invalid")
  ) {
    userCheck();
  } else {
    alert("아이디, 비밀번호를 확인해주세요");
  }
  //
}

function emailReg(text) {
  // 이메일 형식 맞는지 확인
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  // 비밀번호 형식 확인 알파벳, 숫자, !@#$%^*+=- 6~16글자
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function userCheck() {
  if (emailInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    alert("아이디 혹은 비밀번호가 맞지 않습니다.");
  }
}
