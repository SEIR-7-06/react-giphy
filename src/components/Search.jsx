import React from 'react';

class Search extends React.Component {
    state = {
        inputVal: ''
    }

    // Update the inputVal to be whatever the user typed
    handleChange = (event) => {
        this.setState({ inputVal: event.target.value })
    }

    handleFormSubmit = (event) => {
        //prevent default behavior of submitting a form
        event.preventDefault();
        console.log('form was submitted');
        // const key = "kn2xO9zOoQ4R5LiNZHfYrKkguD4UlB3t";
        let url = `https://api.giphy.com/v1/gifs/search?api_key=kn2xO9zOoQ4R5LiNZHfYrKkguD4UlB3t&q=${this.state.inputVal}&limit=25&offset=0&rating=g&lang=en`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.props.setImages(data)
            })
    }

    render() {
        return (
            <div>
                <h2>Search Component</h2>
                <form onSubmit={this.handleFormSubmit}>
                    {/* Controlling a form: saving the text in the input into state */}
                    {/* Step 1: Lock the value to this.state */}
                    {/* Step 2: Listen w/ onChange to any change */}
                    {/* Step 3: setState */}
                    <input 
                        type="text" 
                        value={this.state.inputVal} 
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
  }
  
  export default Search;