// do something!

import Nav from "./components/Nav.js";
import NewList from "./components/NewsList.js";
function App() {
  const state = {
    category: {
      c1: [],
      c2: [],
      c3: [],
    },
    selectedCategory: null,
  };

  function changeCategory(id) {
    state.selectedCategory = id;
    if(state.category[state.selectedCategory].length === 0){
        callApi();

    }

    NewList(state.category[state.selectedCategory]);
  }
  function callApi() {
    state.category [state.selectedCategory] = [...state.category[state.selectedCategory],
                                                 ...[1, 2, 3, 4, 5]];

  }
  function fillData() {
    state[state.selectedCategory] = [1, 2, 3, 4, 5];
  }
  Nav(changeCategory, Object.keys(state.category));
}

App();
