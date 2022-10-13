// do something!

const nav = document.querySelector("nav");
const togglebtn = document.querySelector(".toggle");

// active가 생성될때 그 값을 상태에 넣어주어야 함..
// handleClick을 눌렀는 상태인지 아닌지 알아야 함..
function handleClick() {
  let active_dis = nav.classList.toggle("active");
  //  localstoreage 에 넣고 찾아와서 값이 없으면 닫는다
  // 값이 있다면 active을 가지고 있는 것 처럼 생각해서 구현하기
  if (active_dis) {
    localStorage.setItem("active", "active");
  } else {
    localStorage.removeItem("active");
  }
}

let myStorage = localStorage.getItem("active");
alert(myStorage);
// local이 비어있으면 null

togglebtn.addEventListener("click", handleClick);
