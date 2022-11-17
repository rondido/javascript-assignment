//do something!
//카테고리별
export default function Nav($root, $nav, initialState) {
  const state = initialState;
  $nav.classList.add("category-list");
  $root.appendChild($nav);
  const $ul = document.createElement("ul");
  $nav.appendChild($ul);
  // state.setState = (nextState) => {
  //   state = nextState;
  //   render();
  // };
  const category = Object.entries(state);
  const render = () => {
    const navList = [];

    const nodesTemplate = category.forEach(([key, value]) => {
      navList.push(
        `
        <li class="category-item" id="${value.id}">${value.title}</li>
        `
      );
    });

    $ul.innerHTML = navList.join("");
  };

  render();

  //이벤트 위임?
  // document
  //   .querySelector(".category-list")
  //   .addEventListener("click", function (e) {
  //     e.preventDefault();
  //     e.target.classList.add("active");
  //     if (e.target.classList.contains("active")) {
  //       const id = e.target.getAttribute("id");
  //       const active = document.querySelector("active");
  //       console.log(id);
  //       console.log(e.target.id);
  //   if (e.target.classList.contains("active")) {
  //     e.target.classList.add("active");
  //   }else{

  //   }
  //   if (id === e.target.classList.contains("active")) {
  //     console.log(123);
  //   }
  //   console.log(e.target.classList.contains("active"));
  //}
  //});
}
