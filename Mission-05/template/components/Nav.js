// do something!
//카테고리별
function Nav($root, state, $nav) {
  const $ul = document.createElement("ul");
  // 객체의 키와 값을 담은 배열을 반환
  const category = Object.entries(state);
  //객체의 키값과 요소 값을 가져옴
  category.forEach(([key, value]) => {
    $ul.appendChild(Category({ state: value }));
  });

  $nav.appendChild($ul);
}

function Category(state) {
  const title = state;
  const $li = document.createElement("li");
  $li.classList.add("category-item");
  $li.id = title.state.id;
  $li.innerHTML = title.state.title;
  $li.addEventListener("click", function (e) {
    const active = document.querySelectorAll(".active");
    if (active !== null) {
      $li.classList.remove("active");
    }
    $li.classList.add("active");
  });
  return $li;
}
export default Nav;
