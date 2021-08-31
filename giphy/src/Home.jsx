import './App.css';
import SearchContainer from './components/SearchContainer'

const API_KEY = process.env.REACT_APP_Jack
console.log(API_KEY)

function Home() {
  return (
    <div className="App">
      <nav className='nav'>
      <h3 className='srch'>Search</h3>
      </nav>
      <div className='title'>
      <h1>React Giphy</h1>
      <h3 className='subtitle'>All them giphy thangz...</h3>
      </div>
      <br />
      <br />
      <SearchContainer />
    </div>
  );
}

export default Home;