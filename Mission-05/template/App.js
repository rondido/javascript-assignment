// do something!
// 전역 상태 관리 및 api 연결
import Nav from './components/Nav.js';
//import NewList from './components/NewList.js';
  
function App(){  
  const apiKey = 'daca2ab1ed1f4d9f8b4cd5e05a92a669';
  const pageSize = 5;
  //여기서 카테고리별로 데이터를 받아와서 관리
  const state = {
      category:{
        
      }
  }

  const news = async () => { 
    try{
        await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`,                        
        ).then(function(response){
          return response;
        }).catch(function (error) {
            console.log(error);
        });
    }catch(e){
        console.log(e)
    }
  }
  
  const render = () =>{
    Nav();
  }
  render();
}

App();