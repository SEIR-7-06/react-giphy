import React from 'react';
import Search from './Search'
import Results from './Results'
class SearchContainer extends React.Component {
    state= {
        searchResults: []
    }

    //this function needs to know what gifs to search for
    fetchGifs = (searchTerm) => {
console.log('fetching the GIFS');
//todo: go fetch all of the gifs
    }

        render(){
            return(
            <div>
                Search Container
                <Search fetchGifs={this.fetchGifs}/>
                <Results/>
            </div>    
            )
        }
}

export default SearchContainer

// https://api.giphy.com/v1/gifs/search?api_key=T5kYsXxuk2xKdR0iEFFZUyyK9UKZfjnC&q=&limit=25&offset=0&rating=g&lang=en