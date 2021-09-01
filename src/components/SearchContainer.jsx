import React from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends React.Component {
    state = {
        query: " ",
        searchResults: []
    }

    setSearch = (searchTerm) => {
        this.setState({
            query: searchTerm
        })
        this.fetchGifs()
    }
    
    // Function in charge of updating state
    fetchGifs = () => {
        
        const url = `api.giphy.com/v1/gifs/search?
        api_key=d5J78KLvZyaN8RZeGtsc90BCb37kyJzt&limitq=${this.state.query}`
        fetch(url)
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
            console.log(url)
       
    }
    
    
    render() {
        
        // const ApiKey= 'd5J78KLvZyaN8RZeGtsc90BCb37kyJzt'

        return (
            <div>Search Container

            <Search  setSearch={this.setSearch} />
            <Results />
            </div>
        
        )
    }
}

export default SearchContainer