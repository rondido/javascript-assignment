// do something!
// 뉴스리스트 나오는곳
function NewList(news) {
  const $root_div = document.querySelector("#root");
  const $div = document.createElement("div");
  const $article = document.createElement("article");
  $root_div.append($div);
  $div.classList.add("news-list-container");
  $div.append($article);
  $article.classList.add("news-list");
  
  
  const pageSize = 5;
  const category = "all";
  const page = 1;
  const apiKey = "daca2ab1ed1f4d9f8b4cd5e05a92a669";  
  const getPost = async () =>{
    const API_URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${
      category === "all" ? "" : category
    }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const response = await fetch(API_URL);
    if(!response.ok){
      throw new Error("에러가 발생")
    }
    return await response.json();
  }

  const showPost = (posts) =>{
    posts.articles.forEach((post) => {
      console.log(post);
      const $section = document.createElement("section");
      $section.classList.add("news-item");
      $section.innerHTML = `
        <div class="thumbnail">
          <a href="${post.url}" target="_blank" rel="noopener noreferrer">
          <img src="${post.urlToImage}" alt="thumbnail">
          </a>
        </div>
          <div class="contents">
            <h2>
            <a href="${post.url}">   
            ${post.title}         
            </a>
            </h2>
            <p>
            ${post.description}
            </p>
          </div>
        </div>
      `
      $article.appendChild($section)
    });
  }
  const loadPost = async () => {
    try{
      const response =await getPost();
      showPost(response);
    }catch(error){
      console.log(error);
    }
  }
  loadPost();
  const $scroll_div = document.createElement("div");
  const io = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{

    })
  })
}
export default NewList;
