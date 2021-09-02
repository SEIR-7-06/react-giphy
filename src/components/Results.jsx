import React from 'react'

function Results(props) {
    function renderGifs() {
        props.images.map((image, idx) => {
            <div key={idx}>
                <h3>{image.title}</h3>
            </div>
        })
    }
    return (
        <h1>Results Component</h1>
    )
}

export default Results;
// images.original.url