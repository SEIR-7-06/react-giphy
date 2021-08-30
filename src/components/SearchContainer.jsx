import React from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends React.Component {
    state = {
        searchResults: []
    }

    // Function in charge of updating state
    fetchGifs = (searchTerm) => {
        console.log('fetching the gifs');
    }

    render() {
        return (
            <div>Search Container

            <Search fetchGifs={this.fetchGifs} />
            <Results />
            </div>
        
        )
    }
}

export default SearchContainer