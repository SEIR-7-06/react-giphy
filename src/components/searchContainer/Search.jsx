import React from "react"

//i will want to filter the data and have it include the search value
//then i will want to map through the filtered data and return the result of that and pass it along to the search
    //container so that my results can take it


//i'll want to render my result component here and pass it the input value as props so that it can
    //then search if it has it

class Search extends React.Component {
    state = {
        inputValue: ""
    }

    //this saves input from my search bar
    handleInputChange = (event) => {
        let input = event.target.value
        this.setState({
            inputValue: input
        })
    }
    
    //function to clear search input
    handleClear = () => {
        this.setState({
            inputValue: ""
        })
        this.props.clearResults()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log("form was submitted")
        this.props.setSearch(this.state.inputValue);
    }

    render() {
        const displayClearButton = this.state.inputValue.length > 0

        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text"
                        className = "input"
                        value = {this.state.inputValue}
                        onChange = {this.handleInputChange} /> 
                    <br/>
                    <br/>
                    <br/>
                    <input className = "btn" type = "submit" value = "Get Giphed"/>
                </form>
                <br />
                {displayClearButton ? <button className = "btn" onClick = {this.handleClear}>Clear Search</button> : ""}
            </div>
        )
    }
}

export default Search