import React from "react";
import { Provider } from "react-redux";
import store from './store/store'
import Counter from "./Counter";
import Todolist from "./Todolist";
function App() {
  
  return (
    <Provider store={store}>
      <div className="mybox">
        <h1>Welcome to Edupoly ReactJS Training</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
  
}

export default App;
