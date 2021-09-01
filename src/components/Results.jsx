function Results(props) {
    let renderableResults = props.searchResults.data
    console.log(renderableResults)
    
    function renderResults(){
        if (!renderableResults){
            return
        } else {
            let resultsJSX = renderableResults.map((result,idx)=>{
                // console.log(result)
                return (<div class='parent' key={idx}>

                            <iframe className='resultimg' src= {'https://giphy.com/embed/' + result.id} alt="" frameBorder="0" />
                            
                        </div> )
            
            })
         return resultsJSX
        }
    }
    
    return(
        <div>   
            <h2>Results</h2>
            <div>{renderResults()}</div>
            
        </div>
    )
}



export default Results