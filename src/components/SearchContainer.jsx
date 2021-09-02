import Search from './Search'
// import Results from './Results'
import React from 'react'


class SearchContainer extends React.Component{
    state = {
        searchValue: '',
        foundData: [],
        filterData: []
    }
    componentDidMount(){
        const url = 'https://acnhapi.com/v1a/fish/'
        fetch(url)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(fishdata => {
                this.setState({
                    foundData: fishdata
                })
            })
    }
    handleInput = (e) => {
        this.setState({searchValue: e.target.value})
        console.log(this.state.searchValue)
    }

    handleSubmit = (e) => {
        const fishes = (fish) =>{
            if(fish.id === 1){
                return fish;
            }
        }
        console.log(this.state.foundData.filter(fishes))
        this.setState({filterData: this.state.foundData.filter(fishes)})
    }
    render(){
        console.log(this.state.filterData)
        return(
          <div>
            <Search 
                handleSubmit={this.handleSubmit} 
                handleInput={this.handleInput}
            />
            <h2>{this.state.filterData[0]}</h2>
          </div>
        )
      }
}
export default SearchContainer