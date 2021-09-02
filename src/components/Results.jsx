import React from "react";

function Results(props) {
    function renderGifs() {
        return props.images.map((image, idx) => {
          <div key={idx}>
            <h3>{image.title}</h3>

          </div>
        }
            
      )
    }
    return {this.images}
  }

export default Results;