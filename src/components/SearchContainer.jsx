import React from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends React.Component {
    state = {
        images: []
    }

    // Create a function that's in charge of updating state
    setImages = (data) => {
        this.setState({
            images: data.data
        })
    }

    render() {
        return (
            <div>
                <Search setImages={this.setImages} />
                <Results
                searchResults={this.state.images} />
            </div>
        )
    }
}


export default SearchContainer;