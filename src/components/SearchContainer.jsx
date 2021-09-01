import React from 'react'
import Search from './searchContainer/Search'
import Results from './searchContainer/Results'


//here is where i want the data to go eventually since it will distrbute it to the results and search
class SearchContainer extends React.Component {
    state = {
        query: "",
        searchResults: [], //populate eventually with what we're searching for in search component,
        // title: []
    }

    setSearch = (searchTerm) => {
        this.setState({
            query: searchTerm
        })
        this.fetchGifs()
    }

    fetchGifs = () => {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=lnbZ0hZnnUKA4MagbMIijuB5VXzX9F7v&q=${this.state.query}`
        fetch(url)
            .then(response => {
                // console.log("You're here")
                // console.log(response)
                return(response.json())
            })
            .then(data => {
                const entries = Object.entries(data.data)
                ///start from here
                // console.log(entries.title)
                entries.map(giph => {
                    // console.log(giph[1].title)
                    let copyS = this.state.searchResults
                    copyS.push(giph[1].images.downsized)
                    // let copyT = this.state.title
                    // copyT.push(giph[1].title)
                    this.setState({
                        searchResults: copyS,
                        // title: copyT
                    })
                })
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    clearResults = () => {
        this.setState({
            query: "",
            searchResults: []
        })
    }

    render() {
        return(
            <div>
                <br/>
                <Search 
                    // fetchGifs = {this.fetchGifs}
                    setSearch = {this.setSearch}
                    clearResults = {this.clearResults}    
                />
                <Results searchFor = {this.state.searchResults}/>
                {/* need to get data from search back here and pass it to results */}
            </div>
        )
    }
    
}

export default SearchContainer

