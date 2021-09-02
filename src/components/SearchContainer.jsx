import Search from './Search'
import Results from './Results'
import React from 'react'
import './results.css'

/* --------- apiKey = VCmesYt2CSf2PsUbmNl2l68MpQDRUAvK --------------- */

class SearchContainer extends React.Component {
    state = {
        resultVal: []
    }

    componentDidMount() {
        console.log('giphy is mounted')
    }

    fetchGifs = (searchedGif) => { 
        const url = `https://api.giphy.com/v1/gifs/search?api_key=VCmesYt2CSf2PsUbmNl2l68MpQDRUAvK&q=${searchedGif}&limit=25&offset=0&rating=g&lang=en`
        fetch(url) 
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.setState({ resultVal: data.data})
            })
    }
    
    searchResults = () => {
        let searchedGifs = this.state.resultVal.map((gif, idx) => {
            return (
                <div  className="gifsContainer">
                    <div key={idx}  className="gifsDiv"> 
                        <img src={gif.images.original.url} className="gifs" />     
                    </div>
                </div>
            )
        })
        console.log(searchedGifs)
        return (
            searchedGifs
        )
    }

    render() {
        return (
            <div>
                <Search
                    fetchGifs={ this.fetchGifs }
                />
                <Results 
                    searchResults={this.searchResults}
                />
            </div>
        )
    }
}

export default SearchContainer;