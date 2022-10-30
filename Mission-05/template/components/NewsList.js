// do something!
// 뉴스리스트 나오는곳
function NewList() {
    const root = document.querySelector("#root");
    const div = document.createElement("div");
    div.classList.add("news-list-container");
    root.append(div);
    const aritcle_parent = document.querySelector(".news-list-container");
    const article =  document.createElement("article");
    article.classList.add("news-list");
    aritcle_parent.append(article);
    
}
  export default NewList;
  