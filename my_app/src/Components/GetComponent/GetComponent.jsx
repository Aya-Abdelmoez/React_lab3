import { Component } from "react";
import axios from 'axios'

class GetComponent extends Component{

    constructor(){
        super();
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts : response.data})
        }
        )
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
             {this.state.posts.map((post)=>(
            <div key = {post.id} >
             {post.title}
             </div>
        ))}
          </div>

        )
    }
}
export default GetComponent;