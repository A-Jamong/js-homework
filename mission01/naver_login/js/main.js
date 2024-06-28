const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

//* email 정규표현식을 사용한 검증
const emailInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");

//~ let emailCheckPass = false;
//~ let pwCheckPass = false;

emailInput.addEventListener("input", (e) => {
  // 메일 입력하면서 검증
  if (emailReg(e.target.value)) {
    // e.target.value = this.value 여기서 this는 emailInput
    emailInput.classList.remove("is--invalid"); //검증완료
    //~ emailCheckPass = true
  } else {
    emailInput.classList.add("is--invalid");
    //~ emailCheckPass = false;
  }
});

//* pw 정규표현식을 사용한 검증
pwInput.addEventListener("input", (e) => {
  // Pw 입력하면서 검증
  if (pwReg(e.target.value)) {
    pwInput.classList.remove("is--invalid"); //검증완료
    //~ pwCheckPass = true;
  } else {
    pwInput.classList.add("is--invalid");
    //~ pwCheckPass = false;
  }
});

//* 상태 변수 관리

//* 로그인 버튼 클릭시 조건 처리
const loginBtn = document.querySelector(".btn-login");
loginBtn.addEventListener("click", handleLogin); //todo handlelogin 으로 바꾸기!

function handleLogin(e) {
  e.preventDefault(); //* 이거 떄문에 required 무시됨! 
  //~ > if(emailCheckPass && pwCheckPass) try{const id = emailInput.value; const pw = pwInput.value; const getUserId = user.id; const getUserPw = user.pw; if(id===getUserId && pw===getUserPw){location.href='welcome.html;}catch{}}
  if (
    !emailInput.classList.contains("is--inavalid") &&
    !pwInput.classList.contains("is--invalid")
  ) {
    userCheck(); //정보 맞는지 확인하는 거. 
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

//~ 1. 함수 뜯기
//~ 2. handle 함수 내에서 this 하면 함수 호출한 노드가 나온다 ex)emailInput
