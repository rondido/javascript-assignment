// do something!
const StarRating = ($container) => {
  const maxRating = $container.getAttribute("data-max-rating");
  const newNode = document.createDocumentFragment();
  const link = document.createElement("link");
  link.href = "star-rating/theme.css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
  for (let i = 0; i < maxRating; i++) {
    const star = document.createElement("i");
    star.classList.add("bx", "bxs-star");
    star.setAttribute("data-star", `${i + 1}`);
    newNode.appendChild(star);
  }

  $container.appendChild(newNode);
  $container.className = "star-rating star-rating-container";
  const mouse = document.getElementsByClassName(".bx");
  //queryselector를 사용하면 무조건 하나만 찾아온다.
  // const i_length = document.getElementsByClassName("bx");
  //하나만적용된다? 왜???? 하나만적용될까?
  document
    .querySelector(".star-rating-container")
    .addEventListener("mouseover", (e) => {
      mouse.classList.add("hovered");
    });

  document.querySelector(".bx").addEventListener("mouseout", (e) => {
    mouse.classList.remove("hovered");
  });
  document.querySelector(".bx").addEventListener("click", (e) => {
    mouse.classList.add("selected");
  });
};

export default StarRating;
