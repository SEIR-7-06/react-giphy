import React from "react";
import axios from 'axios';




class Search extends React.Component {
    state ={
        inputVal: '',
        hits:[],
        isLoading: false,
        error: null
    }
    
    handleChange = (event)=>{
this.setState({inputVal: event.target.value});
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=T5kYsXxuk2xKdR0iEFFZUyyK9UKZfjnC&q=${this.state.inputVal}&limit=25&offset=0&rating=g&lang=en`)
        .then(result => {
          this.setState({
            hits: result.data.data,
            isLoading: false
          })
        })
    }

    
    componentDidMount() {
        this.setState({ isLoading: true });
     
        axios.get("https://api.giphy.com/v1/gifs/search?api_key=T5kYsXxuk2xKdR0iEFFZUyyK9UKZfjnC&q=cats&limit=25&offset=0&rating=g&lang=en") 
        .then(result => {
            console.log('hi');
            console.log(result.data.data)
            this.setState({
            hits: result.data.data,
            isLoading: false
          })
        })
        //axios .get and .then go together 
        
          .catch(error => this.setState({
            error,
            isLoading: false
          }));
          
      }
     renderGifs() {
         const variousGifs = this.state.hits.map((gifObject)=> {
           console.log(gifObject.images.fixed_height.url)
            return (
              <div>
                <img src={gifObject.images.fixed_height.url}/>
              </div>
            )     
         })
         return variousGifs  //array of jsx and it has our img tag
     }

    render (){
       this.renderGifs()
    return (
        
      <div>
          <form onSubmit={this.handleFormSubmit}>
              <input 
              type="text" 
              value={this.state.inputVal}
              onChange={this.handleChange}
              />
                <input type="submit" value="Search"/>
            
          </form>
          {this.renderGifs()} // call the map function here.
      </div>  
    )
} 
    
}

export default Search;