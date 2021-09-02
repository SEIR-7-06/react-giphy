import React from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends React.Component {
    state ={
        images: []
    }
    
    // Create a function that is in charge of updating state
    // This function needs to know what gifs to search for
    setImages = (data) => {
        this.setState({
            images: data.data
        })
        console.log('fetching the gifs')
        // To do: go fetch all of the gifs
        // link up the api here?
    }

    render() {
        return (
            <div>
                <Search setImages={this.setImages} />
                <Results images={this.state.images}/>
            </div>
        )
    }
}

export default SearchContainer;