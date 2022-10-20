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

  const mouse = document.querySelector(".bx");

  mouse.addEventListener("mouseover", (event) => {
    for (let i = 0; i < maxRating; i++) {
      mouse.classList.add("hovered");
    }
  });

  mouse.addEventListener("mouseout", (event) => {
    mouse.classList.remove("hovered");
  });
  mouse.addEventListener("click", (event) => {
    mouse.classList.add("selected");
  });
};

export default StarRating;
