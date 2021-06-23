import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <input value={this.props.searchValue} onChange={this.props.handleSearch} />
        )
    }
}

export default Search