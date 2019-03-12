import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

 class PhotoAlbum extends Component {

  state ={
    photos: null
  }

  componentDidMount(){
    let id = this.props.match.params.user_id;
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res =>{
      this.setState({
          photos: res.data
      })
    })
 }
  render() {
    const photo = this.state.photos ?(
      <div>
          <Link to="/"><button className="btn btn-primary"> <i className="fas fa-arrow-left"></i> Back</button></Link>
          <h2>Title: {this.state.photos.title}</h2>
          <div className="card" style={{width:'400px'}}>
          <img className="card-img-top" src={this.state.photos.thumbnailUrl} alt={this.state.photos.title} />
          <div className="card-body">
            <p>URL: {this.state.photos.url}</p>
          </div>
          </div>
      </div>
  ): (
      <div><h1>Loading Photo Albums...</h1></div>
  )
    return (
      <div>
        {photo}
      </div>
    )
  }
}

export default PhotoAlbum;
