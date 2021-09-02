function Results(props) {
    function renderGifs() {
       return (props.images.map((images, idx) => {
           return (
                <div key={idx}>
                    <h1>{images.title}</h1>
                    <img src={images.url} alt="" />
                </div>

           )
       })
        )
    }
    return (
      <div>
          <h2>Results Componenet</h2>
          {renderGifs()}
      </div>
    )
  }
  
  export default Results;