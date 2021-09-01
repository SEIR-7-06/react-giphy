import React from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer';


function Home(){
    return (
      <div className="App">
        <h1 className = "title">Giphy App</h1>
        <SearchContainer />
      </div>
    );
}

export default Home;
