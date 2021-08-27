import React from 'react'
import Results from './Results.jsx'
class SearchContainer extends React.Component {
    state = {
        gifList: [],
        search:""
    }


    fetchURL = () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${window.env.API_URL}&limit=6`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const tempArr = []
                for(let i =0; i<data.data.length;i++){
                    tempArr.push(data.data[i])
                }
                this.setState({
                    gifList: tempArr
                })
                console.log(this.state.gifList)

            })
    }
    handleSubmit=(e)=> {
        e.preventDefault()
        this.fetchURL()
    }
    handleChange=(e) =>{
        this.setState({ 
            search: e.target.value 
        })
    }
    render() {
        return (
            <div className="search-container">
                <h2>Your Gifs</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="type here:" value={this.state.search} onChange={this.handleChange} />
                    <input type="submit" value="Search:" />
                </form>
                 <Results allGifs={this.state.gifList} />
            </div>
        )
    }
}
export default SearchContainer