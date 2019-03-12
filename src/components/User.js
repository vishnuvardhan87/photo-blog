import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

 class User extends Component {
  state ={
      showUserInfo: false
  }
  onShowClick =(e) =>{
     this.setState({
         showUserInfo: !this.state.showUserInfo
     })
  }
  render(props) {
    const {id,name, email, phone, website} = this.props.user;
    const {showUserInfo} = this.state;
    return (

        <div className="card card-body mb-3">
             <h4>{name} <i onClick={this.onShowClick} style={{ cursor: 'pointer' }} className="fas fa-sort-down"></i></h4>
            
            {showUserInfo ?(
                
                    <ul className="list-group">
                    <li className="list-group-item">ID: {id}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                    <li className="list-group-item">Website: {website}</li>
                       <div className="row">
                           <div className="col-md-4">
                             <li className="list-group-item"><Link to={'/post/' + id} style={{textDecoration: 'none'}}>Load Post</Link></li>
                           </div>
                           <div className="col-md-4">
                             <li className="list-group-item"><Link to={'/comment/' + id} style={{textDecoration: 'none'}}>Load Comment</Link></li>
                           </div>
                           <div className="col-md-4">
                             <li className="list-group-item"><Link to={'/photo-album/' + id} style={{textDecoration: 'none'}}>Load Photo Album</Link></li>
                           </div>
                       </div>
                
                </ul>
            
            ) : null}
            
        </div>
    )
  }
}

User.propTypes ={
    user: PropTypes.object.isRequired
}

export default User;
