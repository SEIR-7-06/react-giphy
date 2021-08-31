import './App.css';
import SearchContainer from './components/SearchContainer'

function Home() {
  return (
    <div className="App">
      <nav className='nav'>
        <h3 className='giphy-search'>Giphy Search</h3>
      </nav>
      <div className='title'>
        <h1>React Giphy</h1>
        <h3 className='subtitle'>The true source for all things giphy...</h3>
      </div>
      <br />
      <br />
      <SearchContainer />
    </div>
  );
}

export default Home;
