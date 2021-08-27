function Results(props){
    const render = props.allGifs.map((oneGif,idx)=>{
        return (
            <div key = {idx}>
                <h4>Title: {oneGif.title}</h4>
                <img src={oneGif.images.downsized.url} alt="" />
            </div>
        )
    })
    return(
        <div>
            {render}
        </div>
    )
}
export default Results