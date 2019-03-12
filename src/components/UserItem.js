import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 class UserItem extends Component {
  state ={
      post: null
  }

  componentDidMount(){
      let id = this.props.match.params.user_id;
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res =>{
        this.setState({
            post: res.data
        })
      })
      
  }
  render() {
    const post = this.state.post ?(
        <div>
            <Link to="/"><button className="btn btn-primary"> <i className="fas fa-arrow-left"></i> Back</button></Link>
            <h4>Title: {this.state.post.title}</h4>
            <p> ID: {this.state.post.id}</p>
            <p>Body: {this.state.post.body}</p>
        </div>
    ): (
        <div><h1>Loading Posts</h1></div>
    )
    return (
      <div>
        {post}
      </div>
    )
  }
}

export default UserItem
