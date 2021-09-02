import React from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import SearchContainer from "./components/SearchContainer";

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                </div>
                <div className="titles">
                    <h1 className="title">Giphy Search</h1>
                    <h2 className="small">The true source for all things giphy...</h2>
                </div>
                <SearchContainer/>
            </>
          );
    }
  }

export default Home;