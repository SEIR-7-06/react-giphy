function GifData(props) {
    function renderGifs() {
        return props.data.filter((data) => {
            return data.rating === props.search;
        })
    }
    return(
        <div>
            <h3>GifData</h3>
            {renderGifs()}
        </div>
    )
}
export default GifData;