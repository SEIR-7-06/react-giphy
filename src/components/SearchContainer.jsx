import React from "react";
import Search from "./Search";
import Results from "./Results";

class SearchContainer extends React.Component {
  state = {
    images: []
  }    
  
  setImages = (data) => {
    this.setState({
      images: data.data
    })
  }
    
  render() {
    return (
        <div>
          <h1>React Giphy</h1>
          <Search setImages={this.setImages}/>
          <Results images={this.state.images}/>
        </div>
      )
    }
  }

const apiKey = "8wmxHPr5QES5zg4ZFfZgJFw3lWSz5Yvr"



export default SearchContainer;