import SearchContainer from './components/SearchContainer'
import React from 'react'
import './App.css';

class Home extends React.Component {
  state = {
    inputVal: ''
  }
 
  handleInputChange = () => {
    console.log('A user typed!')
  }

  render() {
    return (
      <div className="App" >
        <h1>React Giphy</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default Home;

// API key = qrT8yGuTuJsCNGrhPQPesInSUUdZUyhQ