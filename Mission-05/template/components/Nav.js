// do something!
//카테고리별
function Nav(category) {
  const root = document.querySelector("#root");
  const nav = document.createElement("nav");
  nav.classList.add("category-list");
  root.append(nav);
  const categoryList = document.querySelector(".category-list");
  const ul = document.createElement("ul");
  categoryList.append(ul);

  function category(e){
    console.log(e.target.id); 
  }
  
  ul.addEventListener("click", category);


  
  ul.innerHTML =`
  <li class="category-item" id="all">전체보기</li>
  <li class="category-item" id="business">비지니스</li>
  <li class="category-item" id="entertainment">엔터테이먼트</li>
  <li class="category-item" id="health">건강</li>
  <li class="category-item" id="science">과학</li>
  <li class="category-item" id="sports">스포츠</li>
  <li class="category-item" id="technology">기술</li>  
  `;
}
export default Nav;
