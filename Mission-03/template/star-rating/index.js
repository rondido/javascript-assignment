// do something!
const StarRating = ($container) => {
  const link = document.createElement("link");
  link.href = "star-rating/theme.css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);

  $container.className = "star-rating star-rating-container";
  const maxRating = $container.dataset.maxRating;
  $container.innerHTML += new Array(Number(maxRating))
    .fill(0)
    .map(createStartTag)
    .join(" ");

  const $containerChildren = Object.entries($container.children).map(
    (i) => i[1]
  );
  const countRating = new starRating();

  addEvent("mouseover", addEventMethod, "hovered");
  addEvent("click", addEventMethod, "selected");

  function addEvent(eventName, eventMethod, name) {
    $containerChildren.forEach(($star, index) =>
      $star.addEventListener(eventName, (event) =>
        eventMethod(event, { index, name })
      )
    );
  }

  function addEventMethod(event, payload) {
    $containerChildren.forEach(($item, index) => {
      if (payload.index >= index) {
        $item.classList.add(payload.name);
        if (event.type === "click") {
          $container.dispatchEvent(
            new CustomEvent("rating-change", {
              detail: index + 1,
            })
          );
        }
        return;
      }
      $item.classList.remove(payload.name);
    });
  }
  $container.addEventListener(
    "mouseleave",
    () => console.log("현재상태3"),
    $containerChildren.forEach(($item) => $item.classList.remove("hovered"))
  );
};

function createStartTag() {
  const tag = document.createElement("i");
  tag.classList.add("bx", "bxs-star");
  return tag.outerHTML;
}

class starRating {
  constructor() {
    this.rating = 0;
  }
}

export default StarRating;
