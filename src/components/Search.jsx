import React from 'react'

class Search extends React.Component{
    render() {
        return(
            <div>
                <input type='text' onChange={this.props.handleInput} />
                <button onClick={this.props.handleSubmit}>Submit</button>
            </div>
        )
    }
}
export default Search;