import React from 'react'
import Results from './Results'
import Search from './Search'


class SearchContainer extends React.Component {
    state = {
        searchResults:[]
    }
    ///this function needs to know what to search for, 
    //want to trigger from the form submission
    fetchGifs = (searchTerm) => {
        console.log('fetching the gifs')
        console.log(searchTerm)
        const url = `https://api.giphy.com/v1/gifs/search?api_key=9OJLbKFA9CYHBo4rBITrQ9z7DVFMCjO0&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`
        fetch(url)
            .then(response => response.json())
            .then(json =>{
                this.setState({
                    searchResults:json
                })
                console.log(this.state.searchResults)

            })
            
        
    }

    render(){
        return(
            <div>
                <Search fetchGifs = {this.fetchGifs}/>
                <Results searchResults = {this.state.searchResults} />
            </div>
        )
        }
}
export default SearchContainer