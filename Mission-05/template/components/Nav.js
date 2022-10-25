// do something!
function Nav() {
  const root = document.querySelector("#root");
  const nav = document.createElement("nav");
  nav.classList.add("category-list");
  root.append(nav);
  const category = document.querySelector(".category-list");
  const ul = document.createElement("ul");
  category.append(ul);
  const all = document.querySelector("#all");
  const business = document.querySelector("#business");
  const enterainment = document.querySelector("#enterainment");
  const health = document.querySelector("#health");
  const science = document.querySelector("#science");
  const sports = document.querySelector("#sports");
  const technolgy = document.querySelector("#technolgy");
  let obj = {};
  for (let i = 0; i < 7; i++) {
    obj[`li${i}`] = document.createElement("li");
  }
  for (let i = 0; i < 7; i++) {
    obj[`li${i}`].classList.add("category-item");
  }
  obj.li0.id = "all";
  obj.li1.id = "business";
  obj.li2.id = "enterainment";
  obj.li3.id = "health";
  obj.li4.id = "science";
  obj.li5.id = "sports";
  obj.li6.id = "technolgy";

  for (let i = 0; i < 7; i++) {
    ul.append(obj[`li${i}`]);
  }

  all.innerHTML = "전체보기";
  business.innerHTML = "비즈니스";
  enterainment.innerHTML = "엔터테인먼트";
  health.innerHTML = "건강";
  science.innerHTML = "과학";
  sports.innerHTML = "스포츠";
  technolgy.innerHTML = "기술";
}

export default Nav;
