import React from 'react'
import Results from './Results'
import Search from './Search'

//API Key= vTDLIg3n9zjStlUX5sKSWznr0BWt5vNN
class SearchContainer extends React.Component {
    state = {
        searchTerm: []
    }
    consoleGifs = () => {
        console.log(process.env.REACT_APP_Brooke)
    }
    //create a function that is in charge of updating state
    //this function needs to know what gifs to search for
    fetchGifs = (searchTerm) => {
        console.log(searchTerm)
        //to-do: fetch all gifs
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=vTDLIg3n9zjStlUX5sKSWznr0BWt5vNN`;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({  searchTerm: json.data })
            console.log(json)
        })
    }
    renderGifs = () => {
        return this.state.searchTerm.map((searchTerm, idx) => {
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
                <Results renderGifs={this.renderGifs} />
            </div>
        )
    }
}

export default SearchContainer