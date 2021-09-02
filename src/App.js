import './App.css';
import React from 'react';
import reactDom from 'react-dom';
import Data from './data/Data.js'
import GifData from './components/GifData';
import SearchContainer from './components/SearchContainer'


class App extends React.Component {
  state = {
    searchValue: '',
  }

  render(){
    return(
      <div>
        <SearchContainer />
      </div>
    )
  }
}

export default App;
