import React from "react";
import "./App.css";

import MyNavbar from "./Components/MyNavbar";

import { Provider } from "react-redux";
import store from "./redux/store";
import MoviesWrapper from "./Components/MoviesWrapper"


function App() {
  
  return <Provider store={store}>

   <div className="App" >
    <MyNavbar/>
   <MoviesWrapper/>
    </div>
    </Provider>
    ;
}

export default App;
