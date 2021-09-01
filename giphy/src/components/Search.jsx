import React from 'react'

class Search extends React.Component {

    state = {
        inputVal: 'iguana'
    }

    handleChange = (event) => {
        // event.target.value = the key the user pressed on their keyboard
        this.setState({ inputVal: event.target.value })

    }

    handleFormSubmit = (event) => {
        // prevent default behavior
        event.preventDefault()

        console.log('form was submitted')

        this.props.fetchGifs()

    }


    render() {
     return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
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
   
   export default Search