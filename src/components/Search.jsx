import React from "react";

class Search extends React.Component {
  state = {
    inputVal: ""
  }  

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      inputVal: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted the form")
    const key = "8wmxHPr5QES5zg4ZFfZgJFw3lWSz5Yvr"
    let url = "https://api.giphy.com/v1/gifs/search?api_key=8wmxHPr5QES5zg4ZFfZgJFw3lWSz5Yvr&q=&limit=25&offset=0&rating=g&lang=en"
    fetch(url)
      .then(response) => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.props.setImages(data)
      })
  }
  
  render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                value={this.state.inputVal} 
                onChange={this.handleChange}
              />
              <input type="submit" />
            </form>
          )
    }
  }

export default Search;