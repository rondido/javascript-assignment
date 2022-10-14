// do something!

const main = {
  // 캡슐화 같은 개념이다..
  init: function () {
    const nav = document.querySelector("nav");
    const togglebtn = document.querySelector(".toggle");
    const body = document.querySelector("body");
    function handleClick() {
      nav.classList.toggle("active");
      body.classList.contains("preload")
        ? body.classList.remove("preload")
        : "";
      nav.classList.contains("active")
        ? localStorage.setItem("key", "active")
        : localStorage.removeItem("key");
    }
    window.onload = function () {
      localStorage.getItem("key") ? nav.classList.add("active") : "";
      document.querySelector("body").style.visibility = "visible";
    };
    togglebtn.addEventListener("click", handleClick);
  },
};

main.init();
