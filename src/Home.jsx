import React from 'react'
import SearchContainer from './components/SearchContainer'
import './App.css';

class Home extends React.Component {
  
   render () {
     return (
     <div className="App">
       <h1>The Gif that keeps on Giphyng</h1>
        <SearchContainer />
     </div>
    );
  }
}

export default Home;
