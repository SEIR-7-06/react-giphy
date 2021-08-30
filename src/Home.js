import './App.css';
import SearchContainer from './components/SearchContainer';

function Home() {
  return (
    <div className="home">
      <header>
      <h1>Giphy Search</h1>
      <p>The true source for all things giphy...</p>
      </header>

      <SearchContainer />
    </div>
  );
}

export default Home;
