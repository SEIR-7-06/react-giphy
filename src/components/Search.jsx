import React from 'react'

class Search extends React.Component {
    state = {
        searchVal: '',
    }

    handleChange = (e) => {
        this.setState({ searchVal: e.target.value })
    }

    handleFormSub = (e) => {
        e.preventDefault();
        console.log("form was submitted");
        this.props.fetchGifs(this.state.searchVal);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSub}>
                    <input
                        type="text"
                        placeholder="Search Gifs"
                        value={this.state.searchVal}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search;