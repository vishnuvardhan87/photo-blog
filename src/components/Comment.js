import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

 class Comment extends Component {
 state ={
     comments: null
 }

 componentDidMount(){
    let id = this.props.match.params.user_id;
    axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res =>{
      this.setState({
          comments: res.data
      })
    })
 }
  render() {
    const comment = this.state.comments ?(
        <div>
            <Link to="/"><button className="btn btn-primary"> <i className="fas fa-arrow-left"></i> Back</button></Link>
            <h4>Name: {this.state.comments.name}</h4>
            <p> ID: {this.state.comments.id}</p>
            <p>Email: {this.state.comments.email}</p>
            <p>Body: {this.state.comments.body}</p>
        </div>
    ): (
        <div><h1>Loading Comments...</h1></div>
    )
    return (
      <div>
        {comment}
      </div>
    )
  }
}

export default Comment
