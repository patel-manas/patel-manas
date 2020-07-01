import React from 'react';
import "./assets/scss/main.scss";
import './App.scss';
import Header from './pages/header/Header';
import Body from './pages/body/Body';
import { scrollTo } from './utils/scrollTo';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <div className="controls" style={{display:"none "}}>
        <div onClick={() => scrollTo("logo")}>UP</div>
      </div>
    </div>
  );
}

export default App;
