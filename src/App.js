import React from 'react'
import SearchContainer from './components/SearchContainer.jsx'
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Search for a Gif</h1>
      <SearchContainer/>
    </div>
  )
}
}

export default App;
