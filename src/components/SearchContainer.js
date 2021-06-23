import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'


class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Search />
                <Result />
            </div>
        )
    }
}

export default SearchContainer