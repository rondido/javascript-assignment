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
    const apiKey = 'daca2ab1ed1f4d9f8b4cd5e05a92a669';
    const pageSize = 5;

    const news = async () => { 
        try{
            const responce = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`,        
                );
            setData(response.data);
        }catch(e){
            console.log(e)
        }
    }

}
  export default NewList;
  