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

  //이벤트 위임?
  document
    .querySelector(".category-list")
    .addEventListener("click", function (e) {
      e.preventDefault();
      e.target.classList.add("active");
      if (e.target.classList.contains("active")) {
        console.log(123);
        const id = e.target.getAttribute("id");
        const active = document.querySelector("active");
        console.log(id);
        console.log(e.target.id);
        //   if (e.target.classList.contains("active")) {
        //     e.target.classList.add("active");
        //   }else{

        //   }
        //   if (id === e.target.classList.contains("active")) {
        //     console.log(123);
        //   }
        //   console.log(e.target.classList.contains("active"));
      }
    });
}
