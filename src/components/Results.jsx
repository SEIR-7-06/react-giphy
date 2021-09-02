import React from 'react'
// import './results.css'

class Results extends React.Component {

    render() {
        return (
            <>
                {this.props.searchResults()}
            </>
        )
    }
}

export default Results;