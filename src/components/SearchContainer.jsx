import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import React from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends React.Component {
    state = {
        searchResults: []
    }

    
    // Function in charge of updating state
    fetchGifs = (search) => {
        
        const url = `api.giphy.com/v1/gifs/search?api_key=d5J78KLvZyaN8RZeGtsc90BCb37kyJzt&limit=10&q=`
        fetch(url + search)
            .then((res) => {
                return res.json
            })
            .then(data => {
                console.log(data);
                this.setState({
                    searchResults: data
                })
            }) 
            .catch(()=>{
                alert('something went wrong')
            })
        
       
    }
    
    
    render() {
        
        // const ApiKey= 'd5J78KLvZyaN8RZeGtsc90BCb37kyJzt'

        return (
            <div>Search Container

            <Search  fetchGifs={this.fetchGifs} />
            <Results />
            </div>
        
        )
    }
}

export default SearchContainer