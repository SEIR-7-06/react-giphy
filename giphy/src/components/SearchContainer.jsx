import React from 'react'
import Results from './Results'
import Search from './Search'


//Gif url api.giphy.com/v1/gifs/search?api_key=oEJQADMGtBUeWuNVStFxezOQhewHJTFa&q=


//API Key= oEJQADMGtBUeWuNVStFxezOQhewHJTFa
class SearchContainer extends React.Component {
    state = {
        searchResults: []
    }
    consoleGifs = () => {
        console.log(process.env.REACT_APP_Jack)
    }
    //create a function that is in charge of updating state
    //this function needs to know what gifs to search for
    fetchGifs = (searchTerm) => {
        console.log('fetching the gifs')
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=oEJQADMGtBUeWuNVStFxezOQhewHJTFa`
       fetch(url)
       .then(response => response.json())
       .then(json => {
           this.setState({ searchResults: json.data})
           console.log(json)
       })
    }

    renderGifs = () => {
        return this.state.searchResults.map((searchTerm, idx) => {
            console.log(searchTerm)
            return(
                <div key={idx}>
                    <img src={searchTerm.images.downsized.url}></img>
                </div>
            )
        })
    }


    render(){
        this.consoleGifs()
        return (
            <div>
                <Search fetchGifs={this.fetchGifs} />
                <Results renderGifs={this.renderGifs}/>
            </div>
        )
    }
}

export default SearchContainer