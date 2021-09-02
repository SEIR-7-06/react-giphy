import React from 'react'

class Search extends React.Component {
    state = {
        inputVal: ""
    }

    handleChange = (event) => {
        this.setState({ inputVal: event.target.value })
    }

    handleFormSubmit = (event) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=qrT8yGuTuJsCNGrhPQPesInSUUdZUyhQ&q=${this.state.inputVal}&limit=25&offset=0&rating=g&lang=en`

        event.preventDefault()
        console.log("Submitted the form!")
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.props.setImages(data.data)
            })
    }

    render() {
        console.log(this.state.inputVal)
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        placeholder="Look for a GIF"
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


// -----------------------------------------------------
// event.target.value = the key the user pressed on their keyboard (Update the inputVal to be whatever the user typed)

// Controlling a form
// Save the text in the input into state
// 1. Lock the value into this.state
// 2. Listen with onChange to any change
// 3. setState