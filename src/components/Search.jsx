import React from 'react'
class Search extends React.Component {

    state = {
        inputVal:''
    }

    handleChange = (event) => {
        //update state from here
        //event target value get you what the user typed
        this.setState({inputVal: event.target.value})

        event.preventDefault()
        console.log('form submitted')
        let searchTerm = this.state.inputVal
        this.props.fetchGifs(searchTerm)
    
        
        
    }
    // handleSubmit = (event) =>{
    //     // prevent default of submitting a form, no refreshing
    //     event.preventDefault()
    //     console.log('form submitted')
    //     let searchTerm = this.state.inputVal
    //     this.props.fetchGifs(searchTerm)
    // }
    render() {
        return (
            <div className='searchbar'>
                <h2 className='searchbar'>Search</h2>
                <form className='searchbar'
                action=""
                onSubmit={this.handleSubmit}>
                    <input 
                        type="search" 
                        value={this.state.inputVal}
                        onChange={this.handleChange}
                    />
                    
                </form>
            </div>
        )
    }
}

export default Search