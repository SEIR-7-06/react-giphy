import React from 'react'

class Search extends React.Component {
    state = {
        inputVal: ''
    }

    //update inputVal to be whatever typed
    handleChange = (event) => {
        // event.target.value is the key(s) pressed
        this.setState({inputVal: event.target.value })

    }
    
    render() {

        return (
            <div>
                <form>
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