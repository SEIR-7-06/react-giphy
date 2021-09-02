import React from 'react'

class Search extends React.Component {
    state = {
        searchVal: '',
    }

    handleChange = (e) => {
        this.setState({ searchVal: e.target.value })
        console.log(this.state.searchVal)
        this.props.fetchGifs(this.state.searchVal + e.target.value[e.target.value.length - 1]);
    }

    // handleFormChange = (e) => {
    //     e.preventDefault();
    //     console.log("form was submitted");
        
    // }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search Gifs"
                        value={this.state.searchVal}
                        onChange={this.handleChange}
                    />
                    {/* <input type="submit" value="Search" /> */}
                </form>
            </div>
        )
    }
}

export default Search;