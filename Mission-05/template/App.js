// do something!
// 전역 상태 관리 및 api 연결
import Nav from "./components/Nav.js";
import NewList from "./components/NewsList.js";

function App() {
  // //observable

  const state = new Proxy(
    {
      all: { id: "all", title: "전체보기" },
      business: { id: "business", title: "비지니스" },
      entertainment: { id: "entertainment", title: "엔터테이먼트" },
      health: { id: "health", title: "건강" },
      science: { id: "science", title: "과학" },
      sports: { id: "sports", title: "스포츠" },
      technology: { id: "technology", title: "기술" },
    },
    {
      set: function (target, prop, value) {
        return Reflect.target;
      },
    },
    {
      get: function (target, prop) {
        return target;
      },
    }
  );
  const $root = document.querySelector("#root");
  const $nav = document.createElement("nav");
  $nav.classList.add("category-list");
  $root.appendChild($nav);
  Nav($root, $nav, state);
  NewList();
  return { $root, $nav, state };
}

App();
