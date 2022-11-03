// do something!
// 뉴스리스트 나오는곳
function NewList($category) {
  const $root_div = document.querySelector("#root");
  const $div = document.createElement("div");
  const $article = document.createElement("article");
  const $section = document.createElement("section");
  $root_div.append($div);
  $div.classList.add("news-list-container");
  $div.append($article);
  $article.classList.add("news-list");
}
export default NewList;
