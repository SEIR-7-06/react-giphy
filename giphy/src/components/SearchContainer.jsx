import React from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends React.Component {

    state = {
        searchResults: []
    }

    // Create a function that is in charge of updating state 
    // This function needs to know what gifs to search for

    fetchGifs = (searchTerm) => {
        console.log('fetching the gifs')
    }

    render() {
        return (
            <div>
                <h1>Search Container</h1>
                <Search fetchGifs={this.fetchGifs} />
                <Results />
            </div>
        )
    }
}

export default SearchContainer