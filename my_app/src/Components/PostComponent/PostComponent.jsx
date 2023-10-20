import { Component } from "react";
import axios from 'axios';
class PostComponent extends Component{
    constructor(){
        super();
         this.state = {
            userId : '',
            title  : '',
            Body   : ''
         }
    }
    handleChange = (event) =>{
        this.setState(
           { [event.target.name] : event.target.value,}
        )
       
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response.data);
        })
        .catch(err => console.log(err))

    }

    render(){
        const {userId , title , Body} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>userId</label>
                    <input type="text" name= "userId" value={userId} onChange={this.handleChange} />
                </div>
                <div>
                <label>title</label>
                    <input type="text" name= "title" value={title} onChange={this.handleChange} />
                </div>
                <div>
                 <label>Body</label>
                 <input type="text" name= "Body" value={Body} onChange={this.handleChange} />
             </div>
             <button type = "submit">submit</button>
            </form>

        )
    }
}
export default PostComponent;