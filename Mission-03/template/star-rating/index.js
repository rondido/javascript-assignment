// do something!
export default function StarRating() {
  const star = document.querySelector(".star-rating");
  const div = document.createElement("div");
  div.classList.add("star-rating-container");
  star.appendChild(div);
  const content = document.querySelector(".star-rating-container");
  const i = document.createElement("box-icon");
  i.tagName.add("bx", "bxs-star");
  content.appendChild(i);
}
