import './App.css';
import SearchContainer from './components/SearchContainer'

const API_KEY = process.env.REACT_APP_Jack
console.log(API_KEY)

function Home() {
  return (
    <div className="App">
      <h1>React Giphy</h1>
      <SearchContainer />
    </div>
  );
}

export default Home;