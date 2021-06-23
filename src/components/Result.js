import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <li>
                <img src={this.props.imgSrc} />
            </li>
        )
    }
}

export default Result