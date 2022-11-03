// do something!

//카테고리별
export default function Nav(initialState, onClick) {
  const $root = document.querySelector("#root");
  this.state = initialState;
  const $nav = document.createElement("nav");
  $nav.classList.add("category-list");
  $root.appendChild($nav);
  this.$target = document.createElement("ul");
  $nav.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const category = Object.entries(this.state);

  this.onClick;
  this.render = () => {
    const navList = [];
    const nodesTemplate = category.forEach(([key, value]) => {
      navList.push(
        `
        <li class="category-item" id="${value.id}">${value.title}</li>
        `
      );
    });
    this.$target.innerHTML = navList.join("");
  };

  this.render();

  const $li = document.querySelectorAll("li");
  console.log(this.state.handler);
  $li.forEach((value) => {
    value.addEventListener("click", function (e) {
      const target = e.target.closest(".category-item");
      this.state.seletedClick = e.target.id;
      if (target) {
        const { targetId } = e.target.id;
        target.classList.add("active");
        if (!targetId) {
          //this.render();
          return;
        }
        const selected = category.find((node) => node.id == targetId);
        console.log(selected);
        if (selected) {
          this.onClick(selected);
        }
      }
    });
  });

  // // 객체의 키와 값을 담은 배열을 반환
  // const category = Object.entries(this.state);

  // category.forEach(([key, value]) => {
  //   navList.push(
  //     `
  //       <li class="category-item" id="${value.id}">${value.title}</li>
  //     `
  //   );
  // });
  // $ul.innerHTML = navList.join("");
  // $nav.appendChild($ul);
}
