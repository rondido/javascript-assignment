// do something!

//카테고리별
function Nav($root, state, $nav) {
  const $ul = document.createElement("ul");
  // 객체의 키와 값을 담은 배열을 반환
  const category = Object.entries(state);
  const navList = [];
  //객체의 키값과 요소 값을 가져옴

  category.forEach(([key, value]) => {
    navList.push(
      `  
        <li class="category-item" id="${value.id}">${value.title}</li>   
      `
    );
  });

  $ul.innerHTML = navList.join("");
  $nav.appendChild($ul);
  const $li = document.querySelectorAll("li");
  console.log($li);
  $li.forEach((value) => {
    value.addEventListener("click", function (e) {
      value.classList.add("active");

      $ul.innerHTML = navList.join("");
    });
  });
}

export default Nav;
