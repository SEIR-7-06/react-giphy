import Result from './Result.css'

function Results(props) {

    // const titles = props.title.map(name => {
    //     return(
    //         <h4>{name}</h4>
    //     )
    // })

    const images = props.searchFor.map(link => {
        return(
            <div>
                <img className = "single-image" src = {link.url} width= "200" height = "200" />
            </div>
        )
    })
   
    return(
        <div>
            <h3>Gallery</h3>
            <div className = "grid-gallery">
                {images}
            </div>
        </div>
    )
}

export default Results